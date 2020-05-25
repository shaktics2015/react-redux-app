import React from "react";
import logo from "../logo.svg";
import "../css/App.css";

function App() {
  return (
    <div className="App">
      {/* <AppComponent /> */}
      <img
        className="App-banner-img"
        src={process.env.PUBLIC_URL + "/img/logo.jpg"}
      />
      ;
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre>{process.env.REACT_APP_SECRET_NAME}</pre>
        <pre>{process.env.REACT_APP_SECRET_DESC}</pre>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
