import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getData } from "./get";
import download from "downloadjs";
import { exportDatabase, importDatabase } from "./db";

function App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await getData();
    setData(data);
  };

  function progressCallback({ totalRows, completedRows }) {
    console.log(`Progress: ${completedRows} of ${totalRows} rows completed`);
  }

  const fileSelected = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      importDatabase(event.target.files[0], progressCallback);
    } catch (error) {
      console.error("" + error);
    }
  };

  const downloadDb = async () => {
    const blob = await exportDatabase(progressCallback);
    download(blob, "dexie-export.json", "application/json");
  };

  return (
    <div className="App">
      <header className="App-header">
        <address>{data?.city}</address>
        <input type="file" onChange={fileSelected} />
        <button onClick={fetchData}>fetch data</button>
        <button onClick={downloadDb}>download database</button>
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
