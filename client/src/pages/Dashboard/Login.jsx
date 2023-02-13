import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  // Check if the user is already logged in
  useEffect(() => {
    // Check Cookie if the user is loggedin
    const cookieValue = Cookies.get('loggedIn');

    if (cookieValue) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,
        password,
      });
      console.log(response);
      // Set Loggedin === true
      Cookies.set('loggedIn', true, { expires: 1 / 24 });

      navigate("/dashboard")
    } catch (error) {
      setError('Invalid Credentials, Please Provide Correct Info!!')
    }
  };

  return (
    <form
      className='flex flex-col gap-5 h-screen items-center justify-center mx-auto w-1/3'
      onSubmit={handleSubmit}
    >
      <h1 className='my-10 text-3xl'>	Login </h1>
      <div >
        <input
          className='border border-gray-300 bg-white py-2 px-4 rounded-md focus:bg-gray-100 active:border-gray-400'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          className='border border-gray-300 bg-white py-2 px-4 rounded-md focus:bg-gray-100 active:border-gray-400'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button className='bg-blue-600 text-white px-5 py-1' type="submit">Login</button>
      {error && <div className='bg-red-500 text-white font-sm py-1 px-5'>{error}</div>}
    </form>
  );
};

export default Login;
