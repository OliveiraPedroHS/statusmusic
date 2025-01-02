// # Componente para ver quantos artistas diferentes já foram ouvidos
import React from "react";

export function UniqueArtists({ data }) {
  // Usando Set para obter os artistas únicos
  const uniqueArtists = new Set(
    data.map((item) => item.master_metadata_album_artist_name)
  );

  return (
    <div>
      {/* <h4>Ouviu</h4> */}
      <p>{uniqueArtists.size} artistas</p>
    </div>
  );
}