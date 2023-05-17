import React from 'react';
import "./Home.scss";

const Home = ({greeting}) => {
  return (
    <div className='home'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default Home
