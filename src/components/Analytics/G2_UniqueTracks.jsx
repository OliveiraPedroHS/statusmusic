// # Componente para ver quantas músicas diferentes já foram ouvidas (pode ser reutilizado)
import React from "react";

export function UniqueTracks({ data }) {
  // Usando Set para obter as músicas únicas
  const uniqueTracks = new Set(
    data.map((item) => item.master_metadata_track_name)
  );

  return (
    <div>
      {/* <h4>Ouviu</h4> */}
      <p>{uniqueTracks.size} músicas</p>
    </div>
  );
}