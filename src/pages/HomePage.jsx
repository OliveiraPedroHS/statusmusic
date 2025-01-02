import { useState } from "react";
import { NavBar } from "./NavBar";
import { TotalPlays } from "../components/Analytics/G1_TotalPlays"; // Certifique-se do caminho correto
import { UniqueTracks } from "../components/Analytics/G2_UniqueTracks";
import { UniqueArtists } from "../components/Analytics/G3_UniqueArtists";
import { TotalMinutes } from "../components/Analytics/G4_TotalMinutes";
import { MostPlayedTrack } from "../components/Analytics/G5_MostPlayedTrack";
import { AverageDailyTime } from "../components/Analytics/G6_AverageDailyTime";
import styles from "../Styles/HomePage.module.css";
import G8_Seasons from "../components/Analytics/G8_Seasons";
import { HoursOfDay } from "../components/Analytics/G7_HoursOfDay";
import { Seasons } from "../components/Analytics/G8_Seasons";
import { useNavigate } from "react-router";
import Top3Top5PorEstacao from "../components/Analytics/G9_G10/Top3Top5PorEstacao";

export function HomePage({ data }) {
  const navigate = useNavigate();
  return (
    <div className={styles.homePage}>
      <NavBar />

      <div className={styles.top100Container}>
        <div>
          <h1>Top 100</h1>
          <button onClick={() => navigate("/top100")}>Quero ver</button>
        </div>
      </div>

      <div>
        <ul className={styles.cardsContainer}>
          <li>
            <img src="/Icones/G1_play_icone.png" alt="Ícone de plays" />
            <TotalPlays data={data} />{" "}
          </li>
          <li>
            <img src="/Icones/G2_musica_icone.png" alt="Ícone de músicas" />
            <UniqueTracks data={data} />
          </li>
          <li>
            <img src="/Icones/G3_artista_icone.png" alt="Ícone de artistas" />
            <UniqueArtists data={data} />
          </li>
          <li>
            <img src="/Icones/G4_tempo_icone.png" alt="Ícone de tempo" />
            <TotalMinutes data={data} />
          </li>
          <li>
            <img src="/Icones/G5_favorita_icone.png" alt="Ícone de favorita" />
            <MostPlayedTrack data={data} />
          </li>
          <li>
            <img src="/Icones/G6_diario_icone.png" alt="Ícone de diário" />
            <AverageDailyTime data={data} />
          </li>
        </ul>

        <ul className={styles.cards2Container}>
          <li>
            <img
              src="/Icones/G7_hora_favorita_icone.png"
              alt="Ícone de horas"
            />
            <HoursOfDay data={data} />
          </li>
          <li>
            <img
              src="/Icones/G8_estacao_favorita_icone.png"
              alt="Ícone de temporadas"
            />
            <Seasons data={data} />
          </li>
        </ul>
        <ul className={styles.listContainer}>
          <li>
            <Top3Top5PorEstacao data={data} />
          </li>
        </ul>
      </div>
    </div>
  );
}
