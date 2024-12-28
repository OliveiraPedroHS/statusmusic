// src/utils/G9Utils.js

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
  
  // Função para calcular o Top 5 músicas mais ouvidas por estação
  export const calcularTop5MusicasPorEstacao = (dados) => {
    const musicasPorEstacao = {
      inverno: {},
      primavera: {},
      verão: {},
      outono: {},
    };
  
    // Iterar sobre os dados e agrupar as músicas por estação
    dados.forEach((registro) => {
      const estacao = obterEstacao(registro.ts); // Determina a estação com base na data
      const musica = registro.master_metadata_track_name;
      const tempoTocado = registro.ms_played; // Tempo de reprodução da música em milissegundos
  
      if (!musica || musica.trim() === "") return; // Ignora músicas sem nome válido
  
      if (!musicasPorEstacao[estacao][musica]) {
        musicasPorEstacao[estacao][musica] = 0;
      }
  
      // Acumula o tempo de reprodução da música por estação
      musicasPorEstacao[estacao][musica] += tempoTocado;
    });
  
    const top5MusicasPorEstacao = {};
  
    // Para cada estação, ordena as músicas pelo tempo de reprodução e pega as 5 mais tocadas
    Object.keys(musicasPorEstacao).forEach((estacao) => {
      const musicasOrdenadas = Object.entries(musicasPorEstacao[estacao])
        .sort((a, b) => b[1] - a[1]) // Ordena pela maior quantidade de tempo tocado
        .slice(0, 5); // Pega as 5 mais tocadas
  
      top5MusicasPorEstacao[estacao] = musicasOrdenadas.map(([musica, tempo]) => ({
        nome: musica,
        tempoEmMinutos: Math.floor(tempo / 60000), // Converte o tempo de milissegundos para minutos
      }));
    });
  
    return top5MusicasPorEstacao;
  };
  