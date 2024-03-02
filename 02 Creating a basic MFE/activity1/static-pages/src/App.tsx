import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <h1>Static pages app</h1>
      <HomePage />
      <PageNotFound />
    </div>
  );
}

export default App;
