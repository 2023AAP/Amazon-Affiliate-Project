import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../CreateProduct/CreateProduct.scss';
const UpdateProduct = (id) => {
    console.log(id)

    const { productId } = useParams();

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(null);
    const [sales, setSales] = useState(100);
    const [rating, setRating] = useState(5);
    const [price, setPrice] = useState();
    const [selectedColors, setSelectedColors] = useState([]);
    const [features, setFeatures] = useState("");
    const [description, setDescription] = useState("");
    const [details, setDetails] = useState("");
    // const [video, setVideo] = useState(null);

    const navigate = useNavigate();

    // Handle File Change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();

        if (title) {
            data.append('title', title);
        }
        if (url) {
            data.append('url', url);
        }
        if (category) {
            data.append('category', category);
        }
        if (file) {
            data.append('file', file);
        }
        if (sales) {
            data.append('sales', sales);
        }
        if (rating) {
            data.append('rating', rating);
        }
        if (price) {
            data.append('price', price);
        }
        if (selectedColors.length > 0) {
            data.append('colors', selectedColors.join(","));
        }
        if (features) {
            data.append('features', features);
        }
        if (description) {
            data.append('description', description);
        }
        if (details) {
            data.append('details', details);
        }

        console.log(`Product_id: ${id}`)
        try {
            const response = await axios.patch(`http://localhost:3000/api/v1/product/update/${id}`, data);
            console.log(response.data);
            navigate("/dashboard")
        } catch (error) {
            console.error(error);
        }
    };

    // Check Cookie to see if the user is loggedin
    useEffect(() => {
        // Check Cookie if the user is loggedin
        const cookieValue = Cookies.get('loggedIn');

        if (!cookieValue) {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    return (
        <div className="container">
            <div className="create_main">

                <form onSubmit={handleSubmit}>
                    <h3>Update Product{productId}</h3>

                    <div className="dash_form">
                        {/* Form left */}
                        <div className="left_form">
                            {/* Title */}
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>

                            {/* URL */}
                            <div>
                                <label htmlFor="url">URL:</label>
                                <input type="url" id="url" value={url} onChange={(event) => setUrl(event.target.value)} />
                            </div>

                            {/* Image */}
                            <div>
                                <label htmlFor="file">Image:</label>
                                <input type="file" id="file" accept="image/*" onChange={handleFileChange} />
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category">Category:</label>
                                <input type="text" id="category" value={category} onChange={(event) => setCategory(event.target.value)} />
                            </div>

                            {/* COlors */}
                            <div>
                                <label>Colors:</label>
                                <div className='colors'>
                                    <label>
                                        <input id="myCheckbox" type="checkbox" value="red" checked={selectedColors.includes("red")} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedColors([...selectedColors, "red"]);
                                            } else {
                                                setSelectedColors(selectedColors.filter(color => color !== "red"));
                                            }
                                        }} /> Red
                                    </label>
                                    <label>
                                        <input id="myCheckbox" type="checkbox" value="blue" checked={selectedColors.includes("blue")} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedColors([...selectedColors, "blue"]);
                                            } else {
                                                setSelectedColors(selectedColors.filter(color => color !== "blue"));
                                            }
                                        }} /> Blue
                                    </label>
                                    <label>
                                        <input id="myCheckbox" type="checkbox" value="green" checked={selectedColors.includes("green")} onChange={e => {
                                            if (e.target.checked) {
                                                setSelectedColors([...selectedColors, "green"]);
                                            } else {
                                                setSelectedColors(selectedColors.filter(color => color !== "green"));
                                            }
                                        }} /> Green
                                    </label>
                                </div>
                            </div>


                            {/* Rating */}
                            <div>
                                <label htmlFor="rating">Rating:</label>
                                <input type="number" id="rating" value={rating} onChange={(event) => setRating(event.target.value)} />
                            </div>
                        </div>

                        {/* Form Right */}
                        <div className="right_form">
                            {/* Price */}
                            <div>
                                <label htmlFor="price">Price:</label>
                                <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />
                            </div>

                            {/* Sales */}
                            <div>
                                <label htmlFor="sales">Sales:</label>
                                <input type="number" id="sales" value={sales} onChange={(event) => setSales(event.target.value)} />
                            </div>

                            {/* Features */}
                            <div>
                                <label htmlFor="features">Features:</label>
                                <textarea id="features" value={features} onChange={(event) => setFeatures(event.target.value)}></textarea>
                            </div>

                            {/* Description */}
                            <div>
                                <label htmlFor="description">Description:</label>
                                <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                            </div>

                            {/* Deatils */}
                            <div>
                                <label htmlFor="details">Details:</label>
                                <textarea id="details" value={details} onChange={(event) => setDetails(event.target.value)}></textarea>
                            </div>
                        </div>
                    </div>

                    <button type="submit">Update Product</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct