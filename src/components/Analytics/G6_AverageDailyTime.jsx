//  # Componente para ver a média de tempo diário a ouvir
// Mayara
export function AverageDailyTime({ data }) {
    // Calculando o total de milissegundos ouvidos
    const totalMilliseconds = data.reduce((acc, item) => acc + item.ms_played, 0);
  
    // Calculando o total de dias
    const firstDate = new Date(data[0].ts);
    const lastDate = new Date(data[data.length - 1].ts);
    const totalDays = (lastDate - firstDate) / (1000 * 60 * 60 * 24);
  
    // Média diária em minutos
    const averageDailyMinutes = totalMilliseconds / 60000 / totalDays;
  
    return (
      <div>
        {/* <h4>{Math.round(averageDailyMinutes)} minutos</h4> */}
        <p>{Math.round(averageDailyMinutes)} minutos diários</p>
      </div>
    );
  }