import React, { useState } from 'react';
import { getTopTracksByArtist } from '../../utils/dataProcessByTopTrackByArtist';
import { filterDataByPeriod } from '../../utils/dataProcessByPeriod';
import styles from "../../Styles/ArtistComponent.module.css";
import drop from "../../Styles/Dropbox.module.css"

const A5_Top20Tracks = ({ data, artistName }) => {
  const [period, setPeriod] = useState('Últimas 4 semanas');  // Estado para controlar o período

  // Filtrar os dados com base no período selecionado
  const filteredData = filterDataByPeriod(data, period);

  // Obter as top 20 músicas do artista com os dados filtrados
  const topTracks = getTopTracksByArtist(filteredData, artistName, data);
  
  return (
    <div className={styles.a5Container}>
      <h2 className={styles.a5Title}>Top 20 Músicas de {topTracks.artist} - Período: {period}</h2>
      
      {/* Filtro de período */}
      <label className={drop.drop}>
        Selecione o período:
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="Últimas 4 semanas">Últimas 4 Semanas</option>
          <option value="Últimos 6 meses">Últimos 6 Meses</option>
          <option value="Último ano">Último Ano</option>
          <option value="Desde sempre">Desde Sempre</option>
        </select>
      </label>
      
      {/* Lista das top 20 músicas */}
      {topTracks.object.length > 0 ? (
        <div className={styles.a5Cards}>
          {topTracks.object.map((track, index) => (
            <div key={index} className={styles.cardMusic}>
              <div className={styles.a5TrackInfo}>
                <h3 className={styles.a5TrackName}>{track.track}</h3>
                <p className={styles.a5TrackDetails}>{track.msPlayed} ms played</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhuma música encontrada para {topTracks.artist} no período selecionado.</p>
      )}
    </div>
  );
};
export default A5_Top20Tracks;