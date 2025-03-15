import { useState } from 'react';
import './assets/styles.css';

const App = () => {
  const [num, setNum] = useState("");

  const handleAlert = () => {
    alert("Hello World");
  };

  return (
    <div className="container">
      <input 
        type="text" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
      />
      <p>{num}</p>
      <button onClick={handleAlert}>Alerta</button>
    </div>
  );
};

export default App;
