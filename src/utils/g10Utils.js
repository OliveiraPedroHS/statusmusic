// src/utils/G10Utils.js

// Função para determinar a estação do ano com base no mês
export const obterEstacao = (data) => {
  const mes = new Date(data).getMonth(); // Obtém o mês da data (0-11)
  if (mes === 11 || mes === 0 || mes === 1) {
    return "inverno";
  } else if (mes >= 2 && mes <= 4) {
    return "primavera";
  } else if (mes >= 5 && mes <= 7) {
    return "verão";
  } else {
    return "outono";
  }
};

// Função para calcular o Top 3 artistas mais ouvidos por estação
export const calcularTop3ArtistasPorEstacao = (dados) => {
  const artistasPorEstacao = {
    inverno: {},
    primavera: {},
    verão: {},
    outono: {},
  };

  // Iterar sobre os dados e agrupar os artistas por estação
  dados.forEach((registro) => {
    const estacao = obterEstacao(registro.ts); // Determina a estação com base na data
    const artista = registro.master_metadata_album_artist_name;
    const tempoTocado = registro.ms_played; // Tempo de reprodução da música em milissegundos

    if (!artista || artista.trim() === "") return; // Ignora artistas sem nome válido

    if (!artistasPorEstacao[estacao][artista]) {
      artistasPorEstacao[estacao][artista] = 0;
    }

    // Acumula o tempo de reprodução do artista por estação
    artistasPorEstacao[estacao][artista] += tempoTocado;
  });

  const top3ArtistasPorEstacao = {};

  // Para cada estação, ordena os artistas pelo tempo de reprodução e pega os 3 mais ouvidos
  Object.keys(artistasPorEstacao).forEach((estacao) => {
    const artistasOrdenados = Object.entries(artistasPorEstacao[estacao])
      .sort((a, b) => b[1] - a[1]) // Ordena pela maior quantidade de tempo tocado
      .slice(0, 3); // Pega os 3 mais ouvidos

    top3ArtistasPorEstacao[estacao] = artistasOrdenados.map(
      ([artista, tempo]) => ({
        nome: artista,
        tempoEmMinutos: Math.floor(tempo / 60000), // Converte o tempo de milissegundos para minutos
      })
    );
  });

  return top3ArtistasPorEstacao;
};
