import React from "react";
import styles from "../Styles/HomePage.module.css"; // Certifique-se de ter o CSS adequado
import { useNavigate } from "react-router";

export function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className={styles.navBar}>
      <div className={styles.navItem}>
        <img
          src="/Icones/NavBar/Me.png"
          alt="Ícone Me"
          onClick={() => navigate("/")}
        />
        <p>Geral</p>
      </div>
      <div className={styles.navItem}>
        <img
          src="/Icones/NavBar/Artistas.png"
          alt="Ícone Artista"
          onClick={() => navigate("/artist")}
        />
        <p>Artista</p>
      </div>
    </nav>
  );
}
