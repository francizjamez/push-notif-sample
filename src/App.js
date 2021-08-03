import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { askForPermissionToReceiveNotifications } from "./firebaseConfig";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={async () => {
            const tokenRes = await askForPermissionToReceiveNotifications();
            setToken(tokenRes);
          }}
        >
          Click to receive notifications
        </button>
        <p>token: {token}</p>
      </header>
    </div>
  );
}

export default App;
