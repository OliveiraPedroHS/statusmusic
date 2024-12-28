// src/components/G9_TracksBySeason.jsx

import React, { useState, useEffect } from "react";
import { calcularTop5MusicasPorEstacao } from "../../utils/g9Utils"; // Importando a função do G9Utils
import sampleData from "../../data/sampleData"; // Dados de exemplo (pode ser um JSON real)

const G9_TracksBySeason = () => {
  const [top5MusicasPorEstacao, setTop5MusicasPorEstacao] = useState({
    inverno: [],
    primavera: [],
    verão: [],
    outono: [],
  });

  useEffect(() => {
    const topMusicas = calcularTop5MusicasPorEstacao(sampleData); // Calcula as top 5 músicas por estação
    setTop5MusicasPorEstacao(topMusicas); // Atualiza o estado com as músicas calculadas
  }, []); // O efeito será executado apenas uma vez quando o componente for montado

  return (
    <div>
      <h1>Top 5 Músicas por Estação</h1>

      {/* Inverno */}
      <div>
        <h2>Inverno</h2>
        <ul>
          {top5MusicasPorEstacao.inverno.length > 0 ? (
            top5MusicasPorEstacao.inverno.map((musica, index) => (
              <li key={index}>
                <strong>{musica.nome}</strong> - {musica.tempoEmMinutos} minutos
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
      </div>

      {/* Primavera */}
      <div>
        <h2>Primavera</h2>
        <ul>
          {top5MusicasPorEstacao.primavera.length > 0 ? (
            top5MusicasPorEstacao.primavera.map((musica, index) => (
              <li key={index}>
                <strong>{musica.nome}</strong> - {musica.tempoEmMinutos} minutos
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
      </div>

      {/* Verão */}
      <div>
        <h2>Verão</h2>
        <ul>
          {top5MusicasPorEstacao.verão.length > 0 ? (
            top5MusicasPorEstacao.verão.map((musica, index) => (
              <li key={index}>
                <strong>{musica.nome}</strong> - {musica.tempoEmMinutos} minutos
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
      </div>

      {/* Outono */}
      <div>
        <h2>Outono</h2>
        <ul>
          {top5MusicasPorEstacao.outono.length > 0 ? (
            top5MusicasPorEstacao.outono.map((musica, index) => (
              <li key={index}>
                <strong>{musica.nome}</strong> - {musica.tempoEmMinutos} minutos
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default G9_TracksBySeason;
