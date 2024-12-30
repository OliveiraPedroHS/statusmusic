import React, { useState, useEffect } from "react";
import { calcularTop3ArtistasPorEstacao } from "../../utils/g10Utils"; // Importando a função do G10Utils
import sampleData from "../../data/sampleData"; // Dados de exemplo (pode ser um JSON real)
import "../../Estilos/G10Utils.css"; // Importa o arquivo CSS

const G10_ArtistsBySeason = () => {
  const [top3ArtistasPorEstacao,setTop3ArtistasPorEstacao] = useState({
    inverno: [],
    primavera: [],
    verão: [],
    outono: [],
  });

  const [estacaoSelecionada, setEstacaoSelecionada] = useState(""); // Estado para controlar qual estação está aberta

  useEffect(() => {
    const topArtistas = calcularTop3ArtistasPorEstacao(sampleData); // Calcula os top 3 artistas por estação
    setTop3ArtistasPorEstacao(topArtistas); // Atualiza o estado com os artistas calculados
  }, []); // Executado apenas uma vez ao montar o componente

  const toggleEstacao = (estacao) => {
    // Alterna entre abrir e fechar a estação selecionada
    setEstacaoSelecionada((prevEstacao) =>
      prevEstacao === estacao ? "" : estacao
    );
  };

  return (
    <div className="container_g10">
      <h1 className="h1_g10">Top 3 Artistas por Estação do ano</h1>
      {/* Botões para selecionar estação */}
      <div className="button-container_g10">
        {["inverno", "primavera", "verão", "outono"].map((estacao) => (
          <button
            key={estacao}
            className={`season-button_g10 ${
              estacaoSelecionada === estacao ? "active" : ""
            }`}
            onClick={() => toggleEstacao(estacao)}
          >
            {estacao.charAt(0).toUpperCase() + estacao.slice(1)}
          </button>
        ))}
      </div>
      {/* Exibir artistas da estação selecionada */}
      <div className="season-display_g10">
        {estacaoSelecionada && (
          <div>
            <h2>
              {estacaoSelecionada.charAt(0).toUpperCase() +
                estacaoSelecionada.slice(1)}
            </h2>
            <ul>
              {top3ArtistasPorEstacao[estacaoSelecionada].length > 0 ? (
                top3ArtistasPorEstacao[estacaoSelecionada].map(
                  (artista, index) => (
                    <li key={index}>
                      <strong>{artista.nome}</strong>{" "}
                      <span>{artista.tempoEmMinutos} minutos</span>
                    </li>
                  )
                )
              ) : (
                <p>Carregando...</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default G10_ArtistsBySeason;
