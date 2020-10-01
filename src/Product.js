import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import Loader from 'react-loader-spinner'

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();
    const [isLoading, setIsLoading] = useState(false);

    const addToBasket = () => {
        setIsLoading(true);
        setTimeout(() => {
            //Displatch the item into the data layer with a little timeout
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id,
                    title,
                    image,
                    price,
                    rating
                }
            })
            setIsLoading(false);
        }, 1500);
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <p key={i}><span role="img" aria-label="star">⭐</span></p>)}
                </div>
            </div>

            <img src={image} alt={title} />

            <div className="product__btnContainer">
                {isLoading &&
                    <Loader
                        type="ThreeDots"
                        color=" #f0c14b"
                        heigth={20}
                        width={40}
                        className="product__loading"
                    />
                }
                {!isLoading &&
                    <button onClick={addToBasket}>Add to Basket</button>
                }
            </div>
        </div>
    )
}

export default Product
