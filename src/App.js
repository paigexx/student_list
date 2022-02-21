import { Router } from "@reach/router";
import Main from "./views/main";
import './App.css';
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
      </Router>   
    </div>
  );
}

export default App;
