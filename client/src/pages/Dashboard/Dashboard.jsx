import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check Cookie if the user is loggedin
    const cookieValue = Cookies.get('loggedIn');

    if (!cookieValue) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard