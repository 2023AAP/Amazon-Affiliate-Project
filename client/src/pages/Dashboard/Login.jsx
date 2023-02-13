import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        email,
        password,
      });
      console.log(response.data.user);
    } catch (error) {
      console.log(error)
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
      <button className='bg-blue-600 text-white px-5 py-1' type="submit">Login</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default Login;
