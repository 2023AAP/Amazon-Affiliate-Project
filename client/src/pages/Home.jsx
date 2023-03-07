import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import './pages.scss'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/api/v1/product/getall');
      const data = await response.json();
      console.log(data)
      setProducts(data.products);
    }
    fetchData();
  }, []);

  return (
    <div className='home'>
      Home
      <div className="products">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home;