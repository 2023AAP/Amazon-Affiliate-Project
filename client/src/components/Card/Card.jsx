import React from 'react';
import './Card.scss'

const Card = ({ product }) => {
    return (
        <div className='Card'>
            {/* Top */}
            <div className="top">
                <div className="sale">
                    <span> {product.sales || 519}</span>
                    sales
                </div>

                <div className="rating">
                    {/* <span>{product.rating}</span> */}
                    {[...Array(Math.floor(product.rating))].map((_, index) => (
                        <i key={index} className="fa-solid fa-star yellow"></i>
                    ))}
                    {product.rating % 1 !== 0 && <i className="fa-solid fa-star-half yellow"></i>}
                </div>
            </div>

            {/* Image */}
            {/* <img src="https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0" alt="" /> */}
            <img src={product.image} alt="" />

            {/* Bottom Info */}
            <div className="bottom">
                <h2 className='product_name'>
                    {product.title.split(' ').slice(0, 6).join(' ')}
                    {/* {product.title.split(' ').length > 6 ? '...' : ''} */}
                </h2>
                <div className='price'>
                    <span>&#x24;</span>
                    {product.price}
                </div >
            </div>
        </div>
    )
}

export default Card