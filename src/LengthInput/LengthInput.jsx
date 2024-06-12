import React from 'react';
import './index.css';

function LengthInput({ length, setLength }) {
  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value));
  };

  return (
    <div className="length-input-container">
      <label>Password Length:</label>
      <input type="number" value={length} onChange={handleLengthChange}  className="length-input"/>
    </div>
  );
}

export default LengthInput;
