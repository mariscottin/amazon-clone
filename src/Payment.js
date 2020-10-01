import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import CheckoutProduct from './CheckoutProduct';
import { db } from './firebase';

import './Payment.css';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async event => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        }).catch(error => setError(error.message))
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout ({<Link to='/checkout'>{basket.length} items</Link>})</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item, i) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    {user ?
                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement
                                    onChange={handleChange}
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />

                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <h3>Order Total: {value}</h3>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandsSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded} className={(processing || disabled || succeeded) ? 'disabled' : 'enabled'}>
                                        <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
                                    </button>

                                    {/* Error */}
                                    {error && <div>{error}</div>}
                                </div>
                            </form>
                        </div>
                        :
                        <Link to='/login'>Sign in to proceed</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Payment
