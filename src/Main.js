import React from "react";
import reactDom from "react-dom";
import { FaEnvelope } from "react-icons/fa";

export default function Main() {
  return (
    <div>
      <h1 className="main--title">Tanimara Elias Santos</h1>
      <h3 className="main--subtitle">Fullstack Developer</h3>
      <a href={"https://anthropovixen.github.io/tanimarasantos/"}>
        tanimaraeliassantos.website
      </a>
      <button
        type="button"
        onClick={(error) => {
          error.preventDefault();
          window.location = "mailto:tanimaraeliassantos@gmail.com";
        }}
      >
        <FaEnvelope /> Email
      </button>
      <div>
        <h2 className="main--sec_title">About</h2>
        <p>
          Software developer with a background in Research. Experienced in
          creating efficient and engaging virtual products for users with a
          data-driven approach.{" "}
        </p>
        <h2 className="main--sec_title">Interests</h2>
        <p>
          Food interests me. Music and dancing. Desserts are my weakness. Put
          condensed milk in everything.{" "}
        </p>
      </div>
    </div>
  );
}
