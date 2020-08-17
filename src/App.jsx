import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data';

const allProducts = data.data;

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={allProducts} />
    </div>
  );
}

export default App;
