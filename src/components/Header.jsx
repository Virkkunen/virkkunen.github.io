import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="hidden">
      <div className="header-name">
        <span>Fred</span> <span className="nick">"Virkkunen"</span>
        <p>Almeida</p>
        <span className="subtext">🇮🇹 🇧🇷 Italian-Brazilian Web Developer</span>
      </div>
      <div className="mobile-hidden">
        <FontAwesomeIcon icon={faCat} size="4x" color="#f38ba8" />
      </div>
    </header>
  );
}