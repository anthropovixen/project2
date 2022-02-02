import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Main() {
  return (
    <main>
      <div>
        <h1 className="main--title">Tanimara Santos</h1>
        <h3 className="main--position">Fullstack Developer</h3>
        <h4 className="main--website">tanimaraeliassantos.website</h4>
      </div>
      <button
        type="button"
        onClick={(error) => {
          error.preventDefault();
          window.location = "mailto:tanimaraeliassantos@gmail.com";
        }}
      >
        <FaEnvelope /> Email
      </button>

      <div className="main--sec">
        <h2 className="main--about">About</h2>
        <p>
          Software developer with a background in Research. Experienced in
          creating efficient and engaging virtual products for users with a
          data-driven approach.{" "}
        </p>
        <h2 className="main--about">Interests</h2>
        <p>
          Food interests me. Music and dancing. Desserts are my weakness. Put
          condensed milk in everything.{" "}
        </p>
      </div>
    </main>
  );
}
