import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Qa from './components/qa/Qa.jsx';
import Related from './components/relatedComparison/Related.jsx';
import Comparison from './components/relatedComparison/Comparison.jsx';
import Rating from './components/reviewRating/Rating.jsx';
import Selector from './components/styleSelect/Selector.jsx';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Selector />
      <div className='related-comp-container'>
        <Related />
        <Comparison />
      </div>
      <div className='q-a-container'>
        <Qa />
      </div>
      <div className='rating-review-container'>
        <Rating />
      </div>
    </div>
  )
};

export default App;
