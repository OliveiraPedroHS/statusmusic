import "./App.css";
import React, { useState } from 'react';
import { filterDataByPeriod } from './utils/dataProcessing';
import G11_Top100Artists from './components/Analytics/G11_Top100Artists';
import G12_Top100Tracks from './components/Analytics/G12_Top100Tracks';
import A4_PercentagePlays from './components/Analytics/A4_PercentagePlays';
import A5_Top20Tracks from './components/Analytics/A5_Top20Tracks';
import A6_ArtistRanking from './components/Analytics/A6_ArtistRank';
import sampleData from './data/sampleData';
import { ArtistComp } from "./components/ArtistComponent";

const newData = sampleData.filter(e => e.master_metadata_album_artist_name !== null )

function App() {
  return (
    <div className="app-container">
      <h1>Estatísticas Gerais</h1>

      <div className="analytics-grid">
        {/* Seção Top 100 Artistas */}
        <div className="analytics-card">
          <G11_Top100Artists data={newData}/>
        </div>

        {/* Seção Top 100 Músicas */}
        <div className="analytics-card">
          <G12_Top100Tracks data={newData} />
        </div>
      </div>

      {/* Seção Análise de Dados do Artista */}
      <div>
        <ArtistComp data ={newData}/>
      </div>
      
    </div>
  );
}

export default App;