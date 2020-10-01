import React from 'react'
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

import './Checkout.css';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__ad" alt="Banner" />

                <div>
                    <h4 style={{ marginLeft: 10 }}>Hey, {user ? user.email : <Link to='/login'>Sign in!</Link>}</h4>
                    <h2 className="checkout__title">{basket.length > 0 ? 'Your Shopping Basket' : 'Your Amazon cart is empty'}</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {basket.length === 0 &&
                        <img src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg' alt="Empty Cart" />
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
