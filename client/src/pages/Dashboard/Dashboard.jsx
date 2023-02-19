import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import axios from "axios";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [sales, setSales] = useState(100);
  const [rating, setRating] = useState(5);
  const [price, setPrice] = useState();
  // const [colors, setColors] = useState([]);
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
    data.append('title', title);
    data.append('file', file);
    data.append('sales', sales);
    data.append('rating', rating);
    data.append('price', price);
    data.append('features', features);
    data.append('description', description);
    data.append('details', details);
    data.append('colors', selectedColors.join(","));

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

            {/* Title */}
            <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>

            {/* Image */}
            <div>
              <label htmlFor="file">Image:</label>
              <input type="file" id="file" accept="image/*" onChange={handleFileChange} />
            </div>

            {/* COlors */}
            <div>
              <label>Colors:</label>
              <div className='colors'>
                <label>
                  <input type="checkbox" value="red" checked={selectedColors.includes("red")} onChange={e => {
                    if (e.target.checked) {
                      setSelectedColors([...selectedColors, "red"]);
                    } else {
                      setSelectedColors(selectedColors.filter(color => color !== "red"));
                    }
                  }} /> Red
                </label>
                <label>
                  <input type="checkbox" value="blue" checked={selectedColors.includes("blue")} onChange={e => {
                    if (e.target.checked) {
                      setSelectedColors([...selectedColors, "blue"]);
                    } else {
                      setSelectedColors(selectedColors.filter(color => color !== "blue"));
                    }
                  }} /> Blue
                </label>
                <label>
                  <input type="checkbox" value="green" checked={selectedColors.includes("green")} onChange={e => {
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
            {/* <div>
              <label htmlFor="colors">Colors:</label>
              <input type="text" id="colors" value={colors} onChange={(event) => setColors(event.target.value.split(','))} />
            </div> */}

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
            <button type="submit">Create Product</button>
          </form>
        </div>


        <div className="right">b</div>
      </div>
    </div>
  )
}

export default Dashboard



  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     title,
  //     image,
  //     rating,
  //     price,
  //     // colors,
  //     features,
  //     description,
  //     details,
  //   };

  //   console.log(data)

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/v1/product/create', data);
  //     console.log(response.data);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };