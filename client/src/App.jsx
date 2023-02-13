import React from 'react';
import { BrowserRouter, Route, redirect, Routes } from 'react-router-dom';
import Login from './pages/Dashboard/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App