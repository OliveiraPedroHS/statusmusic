// src/components/G8_Seasons.jsx

import React, { useState, useEffect } from "react";
import { calcularTempoPorEstacao } from "../../utils/g8Utils"; // Importando a função do G8Utils
import sampleData from "../../data/sampleData"; // Dados de exemplo (pode ser um JSON real)

const G8_Seasons = () => {
  const [tempoPorEstacao, setTempoPorEstacao] = useState({
    inverno: 0,
    primavera: 0,
    verão: 0,
    outono: 0,
  });

  useEffect(() => {
    const tempoCalculado = calcularTempoPorEstacao(sampleData); // Chama a função para calcular o tempo
    setTempoPorEstacao(tempoCalculado); // Atualiza o estado com os tempos calculados
  }, []); // O efeito será executado apenas uma vez quando o componente for montado

  return (
    <div>
      <h1>Tempo de Música por Estação</h1>
      <div>
        <h2>Inverno</h2>
        <p>{tempoPorEstacao.inverno} minutos</p>
      </div>
      <div>
        <h2>Primavera</h2>
        <p>{tempoPorEstacao.primavera} minutos</p>
      </div>
      <div>
        <h2>Verão</h2>
        <p>{tempoPorEstacao.verão} minutos</p>
      </div>
      <div>
        <h2>Outono</h2>
        <p>{tempoPorEstacao.outono} minutos</p>
      </div>
    </div>
  );
};

export default G8_Seasons;
