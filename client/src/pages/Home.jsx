import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import './pages.scss';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/v1/product/getall');
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
      setVisibleProducts(data.products.slice(0, 8));
    }
    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(products);
  };

  return (
    <div className='home'>
      <h3>Latest Products</h3>
      <div className='products'>
        {visibleProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      {visibleProducts.length < products.length && (
        <button className='show_more' onClick={handleShowMore}>Show More</button>
      )}

      <div className='link-to-products'>
        <Link to='/products'>View All Products</Link>
      </div>
    </div>
  );
};

export default Home;
