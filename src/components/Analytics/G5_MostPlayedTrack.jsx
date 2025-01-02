//  # Componente para ver a música mais ouvida
import React from "react";

export function MostPlayedTrack({ data }) {
  // Criar um mapa para contar as ocorrências de cada música
  const trackCounts = data.reduce((acc, item) => {
    const trackName = item.master_metadata_track_name;
    if (trackName) {
      acc[trackName] = (acc[trackName] || 0) + 1;
    }
    return acc;
  }, {});

  // Encontrar a música com mais ocorrências
  const mostPlayed = Object.entries(trackCounts).reduce(
    (max, [track, count]) => (count > max.count ? { track, count } : max),
    { track: null, count: 0 }
  );

  return (
    <div>
      {/* <h3>
        (G5) Ver a musica mais ouvida (por plays) e quantas vezes foi ouvida.
      </h3> */}
      {mostPlayed.track ? (
        <p>
          <strong>{mostPlayed.track}</strong> {mostPlayed.count} vezes
        </p>
      ) : (
        <p>Nenhuma música foi encontrada nos dados.</p>
      )}
    </div>
  );
}