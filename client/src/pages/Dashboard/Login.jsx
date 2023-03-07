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
    <div className="login">
      <form
        onSubmit={handleSubmit}
      >
        <h1 >	Login </h1>
        <div >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
