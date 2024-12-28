import { useState } from "react";
import A4_PercentagePlays from "./Analytics/A4_PercentagePlays";
import A5_Top20Tracks from "./Analytics/A5_Top20Tracks";
import A6_ArtistRanking from "./Analytics/A6_ArtistRank";
import styles from "../Styles/ArtistComponent.module.css"

export const ArtistComp = ({data}) => {

    const [artistName, setArtistName] = useState('');


    //aqyu
    

    return (
        <div className={styles.artist-analysis-section}>
        <h1>Análise de Dados do Artista</h1>
        
        {/* Input para o nome do artista */}
        <div className={styles.search-container}>
          <input
            className= {styles.search-input}
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            placeholder="Digite o nome do artista"
          />
        </div>

        {/* Grade de ícones */}
        <div className= {styles.icon-grid}>
          <div className={styles.icon-button}>
            {/* Ícone para visualização de dados */}
            <span>📊</span>
          </div>
          <div className={styles.icon-button}>
            {/* Ícone para músicas */}
            <span>🎵</span>
          </div>
          <div className="icon-button">
            {/* Ícone para artista */}
            <span>👤</span>
          </div>
        </div>

        <div className="analytics-grid">
          {/* Percentual de Plays */}
          <div className="analytics-card">
            <A4_PercentagePlays data={data} artistName={artistName} />
          </div>

          {/* Seção de Top 20 Músicas */}
          <div className="analytics-card">
            <A5_Top20Tracks 
              data={data} 
              artistName={artistName} 
            />
          </div>

          {/* Ranking de Artista */}
          <div className="analytics-card">
            <A6_ArtistRanking data={data} artistName={artistName} />
          </div>
        </div>
      </div>
    )
}