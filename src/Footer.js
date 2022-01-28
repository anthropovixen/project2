import React from "react";
import reactDom from "react-dom";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <FaTwitter /> <FaFacebookSquare /> <FaInstagramSquare /> <FaLinkedin />
      <FaGithub />
    </div>
  );
}
