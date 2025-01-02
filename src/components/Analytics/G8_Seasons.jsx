export function Seasons({ data }) {
  // Função para determinar a estação com base na data
  const getSeason = (date) => {
    const month = date.getMonth() + 1;
    if (month >= 3 && month <= 5) return "Primavera";
    if (month >= 6 && month <= 8) return "Verão";
    if (month >= 9 && month <= 11) return "Outono";
    return "Inverno";
  };

  // Organizando o tempo total ouvido por estação
  const seasonsData = data.reduce((acc, item) => {
    const season = getSeason(new Date(item.ts));
    acc[season] = (acc[season] || 0) + item.ms_played;
    return acc;
  }, {});

  // Convertendo os dados para um array legível e ordenando pelo tempo
  const sortedSeasons = Object.entries(seasonsData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1); // Pegando apenas as 2 estações mais ouvidas

  return (
    <div>
      <h4>Estação favorita</h4>
      <ul>
        {sortedSeasons.map(([season, time]) => (
          <p key={season}>
            {season}
          </p>
        ))}
      </ul>
    </div>
  );
}
