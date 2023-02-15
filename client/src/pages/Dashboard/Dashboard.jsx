import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import axios from "axios";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);
  // const [colors, setColors] = useState([]);
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  // const [video, setVideo] = useState(null);

  const navigate = useNavigate();

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const base64String = event.target.result;
  //     setImage(base64String);
  //     console.log(`img: ${setImage}`)
  //   };

  //   reader.readAsDataURL(file);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title,
      image,
      rating,
      price,
      // colors,
      features,
      description,
      details,
    };

    console.log(data)

    try {
      const response = await axios.post('http://localhost:3000/api/v1/product/create', data);
      console.log(response.data);
      window.location.reload();
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
    <div className='Dashboard'>
      <h2>Dashboard</h2>

      <div className="dash-flex">

        {/* Create Product */}
        <div className="left">
          <form onSubmit={handleSubmit}>
            <h3>Add Product</h3>
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input type="text" id="image" value={image} onChange={(event) => setImage(event.target.value)} />
              {/* <input type="file" id="image" accept="image/*" onChange={handleImageChange} /> */}
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input type="number" id="rating" value={rating} onChange={(event) => setRating(event.target.value)} />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />
            </div>
            {/* <div>
              <label htmlFor="colors">Colors:</label>
              <input type="text" id="colors" value={colors} onChange={(event) => setColors(event.target.value.split(','))} />
            </div> */}
            <div>
              <label htmlFor="features">Features:</label>
              <textarea id="features" value={features} onChange={(event) => setFeatures(event.target.value)}></textarea>
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
            </div>
            <div>
              <label htmlFor="details">Details:</label>
              <textarea id="details" value={details} onChange={(event) => setDetails(event.target.value)}></textarea>
            </div>
            <button type="submit">Create Product</button>
          </form>
        </div>


        <div className="right">b</div>
      </div>
    </div>
  )
}

export default Dashboard