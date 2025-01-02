//   # Componente para ver quantos minutos já se passou a ouvir (pode ser reutilizado)
import React from "react";

export function TotalMinutes({ data }) {
  // Calculando o total de milissegundos ouvidos
  const totalMilliseconds = data.reduce((acc, item) => acc + item.ms_played, 0);

  // Convertendo para minutos
  const totalMinutes = totalMilliseconds / 60000;

  return (
    <div>
      {/* <h4>Ouviu</h4> */}
      <p>{Math.round(totalMinutes)} minutos</p>{" "}
      {/* Arredondando o valor para evitar frações */}
    </div>
  );
}