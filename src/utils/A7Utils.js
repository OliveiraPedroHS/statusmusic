// Função para determinar o período do dia com base na hora
export const obterPeriodoDoDia = (hora) => {
  if (hora >= 5 && hora <= 11) {
    return "manhã"; // 5:00 - 11:59
  } else if (hora >= 12 && hora <= 17) {
    return "tarde"; // 12:00 - 17:59
  } else {
    return "noite"; // 18:00 - 4:59
  }
};

// Função para calcular o tempo de reprodução por artista e por período do dia
export const obterTop3ArtistasPorTempo = (dados) => {
  const artistasPorPeriodo = {};

  dados.forEach((registro) => {
    // Obtem o nome do artista
    const artista = registro.master_metadata_album_artist_name;
    // Obtem o tempo tocado deste artista
    const tempoTocado = registro.ms_played;
    // Obtém a hora da reprodução
    const hora = new Date(registro.ts).getHours(); 
    // Determina o período do dia (manhã, tarde, noite)
    const periodo = obterPeriodoDoDia(hora); 

    // Verifica se o nome do artista é válido
    if (!artista || artista.trim() === "") return;

    if (!artistasPorPeriodo[artista]) {
      artistasPorPeriodo[artista] = {
        manha: 0,
        tarde: 0,
        noite: 0,
        total: 0,
      };
    }

    // Acumula o tempo tocado no período específico e o tempo total
    artistasPorPeriodo[artista][periodo] += tempoTocado;
    artistasPorPeriodo[artista].total += tempoTocado;
  });

  // Ordena os artistas pelo tempo total de reprodução e pega os 3 mais ouvidos
  const topArtistas = Object.entries(artistasPorPeriodo)
    .sort((a, b) => b[1].total - a[1].total) // Ordena pelo tempo total de reprodução
    .slice(0, 3); // Pega os 3 mais ouvidos

  // Retorna apenas os 3 artistas mais ouvidos com o tempo de reprodução por período
  return topArtistas.map(([artista, tempos]) => ({
    nome: artista,
    tempoPorPeriodo: {
      manha: Math.floor(tempos.manha / 60000), // Converte para minutos
      tarde: Math.floor(tempos.tarde / 60000),
      noite: Math.floor(tempos.noite / 60000),
    },
  }));
};
