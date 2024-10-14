// src/pages/toast/Toast.jsx
import React from 'react';
import './Toast.css'; // Ensure you have styles for the toast

const Toast = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="toast">
      <p>{message}</p>
      <div className="toast-buttons">
        <button className="confirm-button" onClick={onConfirm}>Yes</button>
        <button className="cancel-button" onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default Toast;
