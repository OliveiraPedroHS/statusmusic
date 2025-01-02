import React, { useState, useEffect } from "react";
import { calcularTop5MusicasPorEstacao } from "../../utils/g9Utils"; // Importando a função do G9Utils
import sampleData from "../../data/sampleData"; // Dados de exemplo (pode ser um JSON real)
import "../../Estilos/G9Utils.css"; // Importa o arquivo CSS

const G9_TracksBySeason = () => {
  const [top5MusicasPorEstacao, setTop5MusicasPorEstacao] = useState({
    inverno: [],
    primavera: [],
    verão: [],
    outono: [],
  });
  const [estacaoSelecionada, setEstacaoSelecionada] = useState(""); // Estado para controlar a estação exibida

//     if (!acc[season]) {
//       acc[season] = {};
//     }

  const toggleEstacao = (estacao) => {
    // Alterna entre abrir e fechar a estação selecionada
    if (estacaoSelecionada === estacao) {
      setEstacaoSelecionada(""); // Fecha a estação se já estiver aberta
    } else {
      setEstacaoSelecionada(estacao); // Abre a estação selecionada
    }
  };

  return (
    <div className="container_g9">
      <h1 className="h1_G9">Top 5 Músicas por Estação do ano</h1>

      {/* Botões para selecionar a estação */}
      <div className="button-container">
        <button
          className={`season-button ${
            estacaoSelecionada === "inverno" ? "active" : ""
          }`}
          onClick={() => toggleEstacao("inverno")}
        >
          Inverno
        </button>
        <button
          className={`season-button ${
            estacaoSelecionada === "primavera" ? "active" : ""
          }`}
          onClick={() => toggleEstacao("primavera")}
        >
          Primavera
        </button>
        <button
          className={`season-button ${
            estacaoSelecionada === "verão" ? "active" : ""
          }`}
          onClick={() => toggleEstacao("verão")}
        >
          Verão
        </button>
        <button
          className={`season-button ${
            estacaoSelecionada === "outono" ? "active" : ""
          }`}
          onClick={() => toggleEstacao("outono")}
        >
          Outono
        </button>
      </div>

      {/* Exibir músicas da estação selecionada */}
      <div className="season-display">
        {estacaoSelecionada && (
          <>
            <h2>
              {estacaoSelecionada.charAt(0).toUpperCase() +
                estacaoSelecionada.slice(1)}
            </h2>
            <ul>
              {top5MusicasPorEstacao[estacaoSelecionada].length > 0 ? (
                top5MusicasPorEstacao[estacaoSelecionada].map(
                  (musica, index) => (
                    <li key={index}>
                      <strong>{musica.nome}</strong>
                      <span>{musica.tempoEmMinutos} minutos</span>
                    </li>
                  )
                )
              ) : (
                <p>Carregando...</p>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default G9_TracksBySeason;
