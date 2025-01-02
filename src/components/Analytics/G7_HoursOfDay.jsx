//  # Componente para ver quando é que o utilizador mais ouve música por hora do dia
// Mayara
export function HoursOfDay({ data }) {
    // Calculando o total de milissegundos ouvidos por hora do dia
    const hoursData = data.reduce((acc, item) => {
      const hour = new Date(item.ts).getHours();
      acc[hour] = (acc[hour] || 0) + item.ms_played;
      return acc;
    }, {});
  
    // Ordenando as horas com base no tempo ouvido
    const sortedHours = Object.entries(hoursData)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1); // Exibindo apenas as 4 horas mais ouvidas
  
    return (
      <div>
        <h4>Hora favorita</h4>
        <ul>
          {sortedHours.map(([hour, msPlayed]) => (
            <p key={hour}>
              {hour}:00h
            </p>
          ))}
        </ul>
      </div>
    );
  }