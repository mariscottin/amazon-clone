import React from 'react';
import { useStateValue } from './StateProvider';

import './CheckoutProduct.css';
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {

    const [{ }, dispatch] = useStateValue();

    const removeProductFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    };

    return (
        <div className="checkoutProduct">
            <img src={image} alt={title} className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => <p key={i}><span role="img" aria-label="star">⭐</span></p>)}
                </div>
                {!hideButton &&
                    <button onClick={() => removeProductFromBasket(id)}>Remove from basket</button>
                }
            </div>
        </div>
    )
}

export default CheckoutProduct;
