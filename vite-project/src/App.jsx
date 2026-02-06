import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [upper, setUpper] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  };

  return (
    <div className="app">
      <h1>🔐 Password Generator</h1>

      <input value={password} readOnly />

      <div className="options">
        <label>
          Length:
          <input
            type="number"
            value={length}
            min="4"
            max="20"
            onChange={(e) => setLength(e.target.value)}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={upper}
            onChange={() => setUpper(!upper)}
          />
          Include Uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          Include Symbols
        </label>
      </div>

      <button onClick={generatePassword}>Generate</button>
    </div>
  );
}

export default App;
