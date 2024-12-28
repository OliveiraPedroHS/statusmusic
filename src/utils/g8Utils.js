// src/utils/G8Utils.js

// Função para determinar a estação do ano com base na data (mês)
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

// Função para calcular o total de tempo de música por estação
export const calcularTempoPorEstacao = (dados) => {
  const tempoPorEstacao = {
    inverno: 0,
    primavera: 0,
    verão: 0,
    outono: 0,
  };

  // Iterar sobre os dados e acumular o tempo de reprodução por estação
  dados.forEach((registro) => {
    const estacao = obterEstacao(registro.ts); // Determina a estação com base na data
    const tempoTocado = registro.ms_played; // Tempo de reprodução em milissegundos
    tempoPorEstacao[estacao] += tempoTocado; // Acumula o tempo de reprodução
  });

  // Converte os tempos de milissegundos para minutos
  const tempoTotalPorEstacaoEmMinutos = {
    inverno: Math.floor(tempoPorEstacao.inverno / 60000),
    primavera: Math.floor(tempoPorEstacao.primavera / 60000),
    verão: Math.floor(tempoPorEstacao.verão / 60000),
    outono: Math.floor(tempoPorEstacao.outono / 60000),
  };

  return tempoTotalPorEstacaoEmMinutos;
};
