import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Title</th>
          <th>Name</th>
          <th>Purchase Price</th>
          <th>Selling Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.photo} alt={product.name} width="100" />
            </td>
            <td>{product.title}</td>
            <td>{product.name}</td>
            <td>{product.purchasePrice}</td>
            <td>{product.sellingPrice}</td>
            <td>{product.stock}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;


