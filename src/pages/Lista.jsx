import { useState } from "react";
import DropboxPeriodo from "./Dropbox";
import Card from "./Card";
import styles from "../Styles/Lista.module.css";
import top100Image from "../img/top100.png";


const Lista = ({
  size,
  title,
  aggregatedData,
  sortedTracks,
  periodo,
  setPeriodo,
  onClick,
  estado,
}) => {
  let data;
  if (sortedTracks) {
    data = Object.entries(aggregatedData)
      .map(([track, msPlayed]) => ({ track, msPlayed }))
      .sort((a, b) => b.msPlayed - a.msPlayed) // Ordena por milissegundos de plays
      .slice(0, 100); // Pega as top 100 músicas
  } else {
    data = Object.entries(aggregatedData)
      .map(([artist, plays]) => ({ artist, plays }))
      .sort((a, b) => b.plays - a.plays)
      .slice(0, size); // Pega os top 100 artistas
  }

  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={top100Image}></img>
        <button onClick={onClick}>{estado ? "Musicas" : "Artistas"}</button>
      </div>
      <h2>{title}</h2>

      {/* Filtro de período */}
      <DropboxPeriodo periodo={periodo} setPeriodo={(e) => setPeriodo(e)} />

      {/* Lista de top artistas */}
      <div className={styles.cards}>
        {!sortedTracks
          ? data.map((artist, index) => (
              <Card
                number={index + 1}
                title={artist.artist}
                info={`${artist.plays} plays`}
              />
            ))
          : data.map((track, index) => (
              <Card
                number={index + 1}
                title={track.track}
                info={`${track.msPlayed} ms`}
              />
            ))}
      </div>
    </section>
  );
};

export default Lista;
