import React from 'react';
import Card from '../components/Card/Card';
import './pages.scss'

const Home = () => {
  return (
    <div className='home'>
      Home
      <div className="products">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home