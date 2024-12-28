import React, { useState } from 'react';
import { filterDataByPeriod, aggregateByTrack } from '../../utils/dataProcessByPeriod'; 
import Lista from "../Lista"
const G12_Top100Tracks = ({ data }) => {
  const [period, setPeriod] = useState('Últimas 4 semanas');  // Estado para controlar o período

  // Filtrar os dados de acordo com o período
  const filteredData = filterDataByPeriod(data, period);

  // Agregar os dados por música (milissegundos de plays)
  const aggregatedData = aggregateByTrack(filteredData);

  // Ordenar as músicas por milissegundos de plays


  return (
    <Lista size={100} aggregatedData={aggregatedData} sortedTracks={true} periodo={period} setPeriodo={(e) => setPeriod(e)} title={`Top 100 Musicas - Período: ${period}`}/>
  );
};

export default G12_Top100Tracks;
