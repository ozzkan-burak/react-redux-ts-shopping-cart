import React from 'react';
import './App.css';
import ProductForm from './components/Products/ProductForm';

import ProductList from './components/Products/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
      <ProductForm />
    </div>
  );
}

export default App;
