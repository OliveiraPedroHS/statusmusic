import React, { useState, useEffect } from "react";
import sampleData from "../../data/sampleData"; // Importando os dados
import { obterTop3ArtistasPorTempo } from "../../utils/A7Utils"; // Importando a função de utilitário
import "../../Estilos/A7Utils.css";

const A7_ArtistByTime = () => {
  const [topArtistas, setTopArtistas] = useState([]);

  useEffect(() => {
    const artistasMaisOuvintes = obterTop3ArtistasPorTempo(sampleData); // Calculando os top 3 artistas
    setTopArtistas(artistasMaisOuvintes); // Atualizando o estado com os 3 artistas mais ouvidos
  }, []);

  return (
    <div className="container_A7">
      <h1>Top 3 Artistas Mais Ouvidos e Quando</h1>

      {/* Exibir os 3 artistas mais ouvidos */}
      {topArtistas.length > 0 ? (
        <div>
          {topArtistas.map((artista, index) => (
            <div key={index}>
              <h2>{artista.nome}</h2>
              <p>Tempo de reprodução por período do dia:</p>
              <ul>
                <li>Manhã: {artista.tempoPorPeriodo.manha} minutos</li>
                <li>Tarde: {artista.tempoPorPeriodo.tarde} minutos</li>
                <li>Noite: {artista.tempoPorPeriodo.noite} minutos</li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando os dados...</p>
      )}
    </div>
  );
};

export default A7_ArtistByTime;
