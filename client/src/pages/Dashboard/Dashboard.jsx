import React, { useEffect} from 'react';
import Cookies from 'js-cookie';
import { Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

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
      <div className="h2">
        <h2>
          <Link to='/dashboard'>
            <span>Dashboard</span>
          </Link>
        </h2>
        <Link to='/dashboard/create'>
          <span>Create Products</span>
        </Link>
        <Link to='/dashboard'>
          <span>All Products</span>
        </Link>
      </div>

      <div className="dash-flex">

        <div className="outlet">
          <Outlet/>
        </div>


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