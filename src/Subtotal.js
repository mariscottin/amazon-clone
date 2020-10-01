import React from 'react'
import CurrencyFormat from 'react-currency-format';

import { useHistory, Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';

function Subtotal() {
    const history = useHistory();
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):{' '}
                            <strong>{value}</strong>

                        </p>
                        {basket.length > 0 ?
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>
                            :
                            <small>Nothing in the basket!</small>
                        }
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />

            {basket.length > 0 ?
                <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
                :
                <Link to='/'>Start shopping!</Link>
            }
        </div>
    )
}

export default Subtotal
