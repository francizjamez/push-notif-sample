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

        <button
          onClick={async () => {
            const tokenRes = await askForPermissionToReceiveNotifications();
            setToken(tokenRes);
          }}
        >
          Click to receive notifications
        </button>

        <h3 style={{ width: "95%", wordWrap: "break-word" }}>Token: {token}</h3>
      </header>
    </div>
  );
}

export default App;
