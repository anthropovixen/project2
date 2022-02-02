import React from "react";
import headshot from "../images/headshot-square-220kb.png";

export default function Header() {
  return (
    <div className="header--image">
      <img src={headshot} alt="Tanimara Elias Santos headshot" />
    </div>
  );
}
