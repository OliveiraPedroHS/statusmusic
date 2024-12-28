//G11 G12
// Função para filtrar os dados com base no período
export const filterDataByPeriod = (data, period) => {
    const startDateRange = new Date('2020-01-01'); // Limite inicial dos dados
    const endDateRange = new Date('2023-12-19');  // Limite final dos dados
  
    // Definir a data de fim como o limite dos dados
    const endDate = endDateRange;
  
    // Inicializar a data de início com base no período
    let startDate;
  
    switch (period) {
      case 'Últimas 4 semanas':
        startDate = new Date(endDateRange); // Clone da data final
        startDate.setDate(startDate.getDate() - 28); // Subtrai 28 dias
        break;
      case 'Últimos 6 meses':
        startDate = new Date(endDateRange); // Clone da data final
        startDate.setMonth(startDate.getMonth() - 6); // Subtrai 6 meses
        break;
      case 'Último ano':
        startDate = new Date(endDateRange); // Clone da data final
        startDate.setFullYear(startDate.getFullYear() - 1); // Subtrai 1 ano
        break;
      case 'Desde sempre':
      default:
        // Filtro para "desde sempre", limitado entre 2020 e 2023
        return data.filter(item => {
          const itemDate = new Date(item.ts);
          return itemDate >= startDateRange && itemDate <= endDateRange;
        });
    }
  
    // Garantir que a data de início não ultrapasse 2020
    if (startDate < startDateRange) {
      startDate = startDateRange;
    }
  
    // Retorna os dados dentro do intervalo definido
    return data.filter(item => {
      const itemDate = new Date(item.ts);
      return itemDate >= startDate && itemDate <= endDate;
    });
  };
  // Função para agregar os dados por artista (somando os milissegundos de plays de cada música do artista)
export const aggregateByArtistPlays = (data) => {
    return data.reduce((acc, item) => {
      const artist = item.master_metadata_album_artist_name;
  
      // Verifica se 'artist' existe no item
      if (artist) {
        if (!acc[artist]) {
          acc[artist] = 0; // Inicializa o contador de plays para esse artista
        }
        acc[artist] += 1; // Incrementa o contador de plays para o artista
      }
  
      return acc;
    }, {});
  };
  
  // Função para agregar os dados por música (somando os milissegundos de plays para cada música)
  export const aggregateByTrack = (data) => {
    return data.reduce((acc, item) => {
      const track = item.master_metadata_track_name;
      
      // Verifica se 'track' existe no item
      if (track) {
        if (!acc[track]) {
          acc[track] = 0; // Inicializa o contador de milissegundos para essa música
        }
        acc[track] += item.ms_played; // Soma os milissegundos para a música
      }
  
      return acc;
    }, {});
  };