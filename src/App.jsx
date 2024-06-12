import React, { useState } from 'react';
import PasswordGenerator from './PasswordGenerator/PasswordGenerator';
import PasswordDisplay from './PasswordDisplay/PasswordDisplay';
import StrengthInput from './StrengthInput/StrengthInput';
import LengthInput from './LengthInput/LengthInput';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); // Default length
  const [strength, setStrength] = useState('medium'); // Default strength

  return (
    <div>
      <h1>Random Password Generator</h1>
      <StrengthInput strength={strength} setStrength={setStrength} />
      <LengthInput length={length} setLength={setLength} />
      <PasswordGenerator length={length} strength={strength} setPassword={setPassword} />
      <PasswordDisplay password={password} />
    </div>
  );
}
export default App;
