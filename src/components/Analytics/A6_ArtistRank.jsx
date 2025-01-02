import React from 'react';
import { getArtistRanking } from '../../utils/dataProcessByArtistRancking';

const A6_ArtistRanking = ({ data, artistName }) => {
  const ranking = getArtistRanking(data, artistName);

  return (
    <div>
      {/* <h2>Ranking de {ranking.artist} no Top 100 Artistas</h2> */}
      {ranking.position ? (
        <p><strong>{ranking.artist}</strong> está na posição #{ranking.position} no top 100 artistas.</p>
      ) : (
        <p>{ranking.artist} não está no top 100 artistas.</p>
      )}
    </div>
  );
};

export default A6_ArtistRanking;
