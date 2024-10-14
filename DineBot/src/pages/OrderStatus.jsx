// src/pages/OrderStatus.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OrderStatus.css'; // Create a CSS file for styles

const OrderStatus = () => {
  const location = useLocation(); // Use location to get state from navigation
  const { orderedFood, orderConfirmed } = location.state || {}; // Extract ordered food and confirmation status

  return (
    <div className="order-status">
      <h1 className="status-heading">Order Status</h1>
      {orderConfirmed && orderedFood ? ( // Check if order is confirmed and orderedFood is available
        <div className="order-details">
          <p>Your order for <strong>{orderedFood.name}</strong> has been placed!</p>
          <p>Estimated arrival time: <strong>20 minutes</strong></p>
        </div>
      ) : (
        <p>No order has been placed.</p>
      )}
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
};

export default OrderStatus;
