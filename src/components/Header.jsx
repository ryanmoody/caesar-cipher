import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiLaurels } from "react-icons/gi";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <GiLaurels className="logo-icon" size="2rem" />
        <h1 className="logo-text">Caesar Cipher</h1>
      </div>
      <a
        href="https://github.com/ryanmoody/caesar-cipher"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="github-icon" size="2rem" title="GitHub" />
      </a>
    </header>
  );
};

export default Header;
