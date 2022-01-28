import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
