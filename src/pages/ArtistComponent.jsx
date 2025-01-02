import { useState } from "react";
import A4_PercentagePlays from "../components/Analytics/A4_PercentagePlays";
import A5_Top20Tracks from "../components/Analytics/A5_Top20Tracks";
import A6_ArtistRanking from "../components/Analytics/A6_ArtistRank";
import styles from "../Styles/ArtistComponent.module.css";
import A1_TotalPlays from "../components/Analytics/A1_TotalPlays";
import A2_UniqueTracks from "../components/Analytics/A2_UniqueTracks";
import A3_TotalMinutes from "../components/Analytics/A3_TotalMinutes";
import A7_ArtistBySeason from "../components/Analytics/A7_ArtistBySeason";
import play from '../icones/G1_play_icone.png'
import music from '../icones/G2_musica_icone.png'
import minute from '../icones/G4_tempo_icone.png'
import porcent from '../icones/porcentagem.png'
import ranking from '../icones/ranking.png'
import estacao from '../icones/estacao.png'
import { NavBar } from "./NavBar";

export const ArtistComp = ({ data }) => {
  const [artistName, setArtistName] = useState('');

  return (
    <div className={styles.container}>
      <NavBar />
      <h1>Análise de Dados do Artista</h1>

      {/* Input para o nome do artista */}
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          placeholder="Digite o nome do artista"
        />
      </div>

      {/* Primeira linha: A1, A2, A3 */}
      <div className={styles.analyticsGrid}>
        <div className={styles.squareCard}>
          <img className={styles.icons} src={play}></img>
          <A1_TotalPlays data={data} artistName={artistName} />
        </div>
        <div className={styles.squareCard}>
        <img className={styles.icons} src={music}></img>
          <A2_UniqueTracks data={data} artistName={artistName} />
        </div>
        <div className={styles.squareCard}>
        <img className={styles.icons} src={minute}></img>
          <A3_TotalMinutes data={data} artistName={artistName} />
        </div>
      </div>

      {/* Segunda linha: A4, A6, A7 */}
      <div className={styles.analyticsGrid}>
        <div className={styles.squareCard}>
          <div className={styles.cardContent}>
          <img className={styles.icons2} src={porcent}></img>
            <A4_PercentagePlays data={data} artistName={artistName} />
          </div>
        </div>

        <div className={styles.squareCard}>
          <div className={styles.cardContent}>
          <img className={styles.icons2} src={ranking}></img>
            <A6_ArtistRanking data={data} artistName={artistName} />
          </div>
        </div>

        <div className={styles.squareCard}>
          <div className={styles.cardContent}>
          <img className={styles.icons2} src={estacao}></img>
            <A7_ArtistBySeason data={data} artistName={artistName} />
          </div>
        </div>
      </div>

      {/* Seção de Top 20 Músicas (A5) */}
      <div className={styles.analyticsCard}>
        <A5_Top20Tracks data={data} artistName={artistName} />
      </div>
    </div>
  );
};
