import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getData } from "./get";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const get = async () => {
      const data = await getData();
      setData(data);
    };
    get();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <address>{data.city}</address>
      </header>
      <button
        onClick={() => {
          navigator.serviceWorker.controller.postMessage({
            type: "MESSAGE_IDENTIFIER",
          });
        }}
      >
        send message
      </button>
    </div>
  );
}

export default App;
