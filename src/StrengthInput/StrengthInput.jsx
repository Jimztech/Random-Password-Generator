import React from 'react';

function StrengthInput({ strength, setStrength }) {
  const handleStrengthChange = (e) => {
    setStrength(e.target.value);
  };

  return (
    <div>
      <label>Strength:</label>
      <select value={strength} onChange={handleStrengthChange}>
        <option value="weak">Weak</option>
        <option value="medium">Medium</option>
        <option value="strong">Strong</option>
      </select>
    </div>
  );
}

export default StrengthInput;
