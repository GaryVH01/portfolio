import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com/GaryVan_Hecke"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        href="https://github.com/GaryVH01"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/garyvh/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
