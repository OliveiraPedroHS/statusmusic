import React, { useState } from 'react';
import { getTopTracksByArtist } from '../../utils/dataProcessByTopTrackByArtist';
import { filterDataByPeriod } from '../../utils/dataProcessByPeriod';

const A5_Top20Tracks = ({ data, artistName }) => {
  const [period, setPeriod] = useState('Últimas 4 semanas');  // Estado para controlar o período

  // Filtrar os dados com base no período selecionado
  const filteredData = filterDataByPeriod(data, period);

  // Obter as top 20 músicas do artista com os dados filtrados
  const topTracks = getTopTracksByArtist(filteredData, artistName, data);
  
  return (
    <div>
      <h2>Top 20 Músicas de {topTracks.artist} - Período: {period}</h2>
      
      {/* Filtro de período */}
      <label>
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
        <ul>
          {topTracks.object.map((track, index) => (
            <li key={index}>
              {track.track}: {track.msPlayed} ms played
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma música encontrada para {topTracks.artist} no período selecionado.</p>
      )}
    </div>
  );
};

export default A5_Top20Tracks;

