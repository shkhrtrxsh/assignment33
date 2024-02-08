
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editOrder, deleteOrder } from '../redux/actions';

const OrderList = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  // State to track the currently edited order ID
  const [editingOrderId, setEditingOrderId] = useState(null);

  // State to store edited values temporarily
  const [editedOrder, setEditedOrder] = useState({
    customer_name: '',
    customer_email: '',
    product: '',
    quantity: 0,
  });

  const handleEditOrder = (order) => {
    // Set the order ID being edited and initialize edited values
    setEditingOrderId(order.id);
    setEditedOrder({ ...order });
  };

  const handleSaveOrder = () => {
    // Dispatch the edited order with updated values
    dispatch(editOrder({ id: editingOrderId, ...editedOrder }));

    // Reset editing state
    setEditingOrderId(null);
    setEditedOrder({
      customer_name: '',
      customer_email: '',
      product: '',
      quantity: 0,
    });
  };

  const handleDeleteOrder = (orderId) => {
    // Dispatch the order ID to be deleted
    dispatch(deleteOrder(orderId));
  };

  const handleInputChange = (e) => {
    // Update the edited values as the user types
    setEditedOrder({
      ...editedOrder,
      [e.target.name]: e.target.value,
    });
  };

  const productOptions = ['Product 1', 'Product 2', 'Product 3'];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Order List</h2>
      <ul className="list-none p-0">
        {orders.map((order) => (
          <li key={order.id} className="mb-4 bg-white p-4 rounded shadow">
            <div className="mb-2">
              <strong>Order ID:</strong> {order.id}
            </div>
            <div className="mb-2">
              <strong>Customer Name:</strong>{' '}
              {editingOrderId === order.id ? (
                <input
                  type="text"
                  name="customer_name"
                  value={editedOrder.customer_name}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                order.customer_name
              )}
            </div>
            <div className="mb-2">
              <strong>Customer Email:</strong>{' '}
              {editingOrderId === order.id ? (
                <input
                  type="text"
                  name="customer_email"
                  value={editedOrder.customer_email}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                order.customer_email
              )}
            </div>
            <div className="mb-2">
              <strong>Product:</strong>{' '}
              {editingOrderId === order.id ? (
                <select
                  name="product"
                  value={editedOrder.product}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                >
                  {productOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                order.product
              )}
            </div>
            <div className="mb-2">
              <strong>Quantity:</strong>{' '}
              {editingOrderId === order.id ? (
                <input
                  type="number"
                  name="quantity"
                  value={editedOrder.quantity}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                order.quantity
              )}
            </div>
            <div className="flex">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleEditOrder(order)}
              >
                Edit
              </button>
              {editingOrderId === order.id && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={handleSaveOrder}
                >
                  Save
                </button>
              )}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDeleteOrder(order.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
