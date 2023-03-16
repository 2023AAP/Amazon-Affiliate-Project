import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleProduct.scss'

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/product/${id}`);
                setProduct(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div>
            {product && (
                <div className="hero-banner">
                    <div className="content">
                        <div className="text-content">
                            <h4>{product.title}</h4>
                            <p>
                                {product.details}
                            </p>
                            <div className="ctas">
                                <div className="banner-cta">Read More</div>
                                <div className="banner-cta v2">Shop Now</div>
                            </div>
                        </div>
                        <img className="banner-img" src={`http://localhost:3000/img/products/${product.image}`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProduct;
