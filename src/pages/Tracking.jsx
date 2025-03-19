import React from 'react';

const Tracking = () => {
  return (
    <div className="tracker-container">
      <h2 className="tracker-title">TRACK YOUR SHIPMENT</h2>
      <p className="tracker-subtitle">Find the status of your in transit shipment</p>
      <div className="tracker-input-container">
        <input type="text" placeholder="Enter your tracking number(s)" className="tracker-input" />
        <button className="tracker-button">Track</button>
      </div>
    </div>
  );
};

export default Tracking;
