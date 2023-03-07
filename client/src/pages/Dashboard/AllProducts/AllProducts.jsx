import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import './AllProducts.scss'

const AllProducts = () => {
    const navigate = useNavigate()

    const [products, setProducts] = useState([]);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCheckboxChange = (productId) => {
        const selectedIndex = selectedProducts.indexOf(productId);

        console.log(productId)

        if (selectedIndex > -1) {
            // Product is already selected, remove it
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        } else {
            // Product is not selected, add it
            setSelectedProducts([...selectedProducts, productId]);
        }

        // Check if the checkbox is now checked
        const isChecked = selectedProducts.includes(productId);
        if (!isChecked) {
            navigate(`/dashboard/update/${productId}`, { state: { productId } });
        }
    }




    useEffect(() => {
        fetch('http://localhost:3000/api/v1/product/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data); // <-- add this line
                setProducts(data.products);
            })
            .catch(error => console.log(error));
    }, []);


    return (
        <div className='allproduct'>
            <h3>All Products</h3>

            <div className="all">

                <div className="all_row">
                    <div className="checkbox">
                        Edit
                    </div>
                    <div className="id">Id</div>
                    <div className='image'>Image</div>

                    <div className='title'>Product Title</div>
                    <div className='category'>Product Category</div>
                    <div className='price'>Price</div>
                </div>

                {products.map(product => (
                    <div className={`all_row ${selectedProducts.includes(product._id) ? "selected" : ""}`} key={product._id}>
                        <div className="checkbox" onClick={()=> <UpdateProduct id={product._id}/>}>
                            <input
                                type="checkbox"
                                checked={selectedProducts.includes(product._id)}
                                onChange={() => handleCheckboxChange(product._id)}
                            />
                        </div>
                        <div className='image'>
                            <img src={`http://localhost:3000/img/products/${product.image}`} alt={product.title} />
                        </div>
                        <div className='title'>{product.title.trim()}</div>
                        <div className='category'>{product.category}</div>
                        <div className='price'>{product.price}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AllProducts