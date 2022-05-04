import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getData } from "./get";

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <address>{data?.city}</address>
      <button onClick={fetchData}>fetch data</button>
      <button
        onClick={() => {
          navigator.serviceWorker.controller.postMessage({
            type: "MESSAGE_IDENTIFIER",
          });
        }}
      >
        send message
      </button>
      </header>
    </div>
  );
}

export default App;
