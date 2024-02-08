// src/components/OrderForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../redux/actions';

const OrderForm = () => {
  const dispatch = useDispatch();
  const [isFormVisible, setFormVisibility] = useState(false);

  const [newOrder, setNewOrder] = useState({
    id: Math.random().toString(36).substring(7), // Generate a random ID
    customer_name: '',
    customer_email: '',
    product: '',
    quantity: 0,
  });

  const handleInputChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    // Dispatch the new order to be added
    dispatch(addOrder(newOrder));
    setNewOrder({
      id: Math.random().toString(36).substring(7),
      customer_name: '',
      customer_email: '',
      product: '',
      quantity: 0,
    });
    setFormVisibility(false);
  };

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <div>
      <button
        onClick={toggleFormVisibility}
        className="bg-blue-500 text-white px-5 py-2 rounded mb-4 ml-4"
      >
        {isFormVisible ? 'Hide Form' : 'Create New Order'}
      </button>

      {isFormVisible && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Create New Order</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Customer Name:
              <input
                type="text"
                name="customer_name"
                value={newOrder.customer_name}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Customer Email:
              <input
                type="text"
                name="customer_email"
                value={newOrder.customer_email}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product:
              <select
                name="product"
                value={newOrder.product}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              >
                <option value="Product 1">Product 1</option>
                <option value="Product 2">Product 2</option>
                <option value="Product 3">Product 3</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity:
              <input
                type="number"
                name="quantity"
                value={newOrder.quantity}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </label>
          </div>
          <button
            onClick={handleAddOrder}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
