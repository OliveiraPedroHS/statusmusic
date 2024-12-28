import React, { useState } from 'react';
import { filterDataByPeriod, aggregateByArtistPlays } from '../../utils/dataProcessByPeriod';
import Lista from "../Lista"
const G11_Top100Artists = ({ data }) => {
  const [period, setPeriod] = useState('Últimas 4 semanas');  // Estado para controlar o período

  // Filtrar os dados de acordo com o período
  const filteredData = filterDataByPeriod(data, period);

  // Agregar os dados por artista (número de plays)
  const aggregatedData = aggregateByArtistPlays(filteredData);

  // Ordenar os artistas por quantidade de plays
  

  return (
    <Lista size={100} aggregatedData={aggregatedData} sortedTracks={false} periodo={period} setPeriodo={(e) => setPeriod(e)} title={`Top 100 Artistas - Período: ${period}`}/>
  );
};





export default G11_Top100Artists;
