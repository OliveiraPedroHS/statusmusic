// src/components/G10_ArtistsBySeason.jsx

import React, { useState, useEffect } from "react";
import { calcularTop3ArtistasPorEstacao } from "../../utils/g10Utils"; // Importando a função do G10Utils
import sampleData from "../../data/sampleData"; // Dados de exemplo (pode ser um JSON real)

const G10_ArtistsBySeason = () => {
  const [top3ArtistasPorEstacao, setTop3ArtistasPorEstacao] = useState({
    inverno: [],
    primavera: [],
    verão: [],
    outono: [],
  });

  useEffect(() => {
    const topArtistas = calcularTop3ArtistasPorEstacao(sampleData); // Calcula os top 3 artistas por estação
    setTop3ArtistasPorEstacao(topArtistas); // Atualiza o estado com os artistas calculados
  }, []); // O efeito será executado apenas uma vez quando o componente for montado

  return (
    <div className="artists-container">
      <h1>Top 3 Artistas por Estação</h1>

      {/* Inverno */}
      <div>
        <h2>Inverno</h2>
        <ul>
          {top3ArtistasPorEstacao.inverno.length > 0 ? (
            top3ArtistasPorEstacao.inverno.map((artista, index) => (
              <li key={index}>
                <strong>{artista.nome}</strong> - {artista.tempoEmMinutos}{" "}
                minutos
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
          {top3ArtistasPorEstacao.primavera.length > 0 ? (
            top3ArtistasPorEstacao.primavera.map((artista, index) => (
              <li key={index}>
                <strong>{artista.nome}</strong> - {artista.tempoEmMinutos}{" "}
                minutos
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
          {top3ArtistasPorEstacao.verão.length > 0 ? (
            top3ArtistasPorEstacao.verão.map((artista, index) => (
              <li key={index}>
                <strong>{artista.nome}</strong> - {artista.tempoEmMinutos}{" "}
                minutos
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
          {top3ArtistasPorEstacao.outono.length > 0 ? (
            top3ArtistasPorEstacao.outono.map((artista, index) => (
              <li key={index}>
                <strong>{artista.nome}</strong> - {artista.tempoEmMinutos}{" "}
                minutos
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

export default G10_ArtistsBySeason;
