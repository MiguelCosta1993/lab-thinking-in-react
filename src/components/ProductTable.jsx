import React from 'react';

import ProductRow from './ProductRow';
import './ProductTable.css';

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <ProductRow {...product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
