import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Dashboard/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Category from './pages/Category';
import SingleProduct from './pages/SingleProduct';
import Layout from './components/Layout';
import AllProducts from './pages/Dashboard/AllProducts/AllProducts';
import CreateProduct from './pages/Dashboard/CreateProduct/CreateProduct';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<SingleProduct />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/" element={<AllProducts />} />
          <Route path="/dashboard/create" element={<CreateProduct />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App