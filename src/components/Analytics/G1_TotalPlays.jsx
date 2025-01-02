import React from "react";

export function TotalPlays({ data }) {
  // Calcula o número total de registros no array
  const totalPlays = data.length;

  return (
    <div>
      {/* <h4>Plays</h4> */}
      <p>{totalPlays} Plays</p>
    </div>
  );
}