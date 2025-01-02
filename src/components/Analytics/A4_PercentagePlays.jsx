import React from 'react';
import { calculateArtistPlayPercentage } from '../../utils/dataProcessByArtistPlaysPercentage';


const A4_PercentagePlays = ({ data, artistName}) => {
  // Calcular a porcentagem de plays do artista (sem filtro por período)
  const artistiInfo = calculateArtistPlayPercentage(data, artistName);

  return (
    <div>
      {/* <h2>Percentual de Plays de {artistiInfo.artist}</h2> */}
      <p>
       <strong>{artistiInfo.artist}</strong> representa {artistiInfo.totalPlays.toFixed(2)}% do total de plays.
      </p>
    </div>
  );
};

export default A4_PercentagePlays;
