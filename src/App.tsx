import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ProductForm from './components/Products/ProductForm';

import ProductList from './components/Products/ProductList';
import store from './redux/store/store';

function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <ProductList />
      <ProductForm />
    </div>
  </Provider>
  );
}

export default App;
