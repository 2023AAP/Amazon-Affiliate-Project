import React from 'react';
import './Card.scss'

const Card = () => {
    return (
        <div className='Card'>
            {/* Top */}
            <div className="top">
                <div className="sale">
                    <span> 5,000</span>
                    sales
                </div>

                <div className="rating">
                    <span>4</span>
                    <i class="fa-solid fa-star yellow"></i>
                </div>
            </div>

            {/* Image */}
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-wool-runnerjpg.jpg?q=h_1090,w_1938,x_0,y_0" alt="" />

            {/* Bottom Info */}
            <div className="bottom">
                <h2 className='product_name'>Super Product</h2>
                <div className='price'>
                    <span>&#x24;</span>
                    500
                </div >
            </div>
        </div>
    )
}

export default Card