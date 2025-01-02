// import React from "react";
// import styles from "../../Styles/HomePage.module.css"

// function G9_TracksBySeason({ data }) {
//   // Função para determinar a estação do ano com base no mês
//   const getSeason = (date) => {
//     const month = new Date(date).getMonth();
//     if (month === 11 || month < 2) {
//       return "Inverno";
//     } else if (month >= 2 && month < 5) {
//       return "Primavera";
//     } else if (month >= 5 && month < 8) {
//       return "Verão";
//     } else {
//       return "Outono";
//     }
//   };

//   // Agrupar as músicas por estação e contar o tempo tocado
//   const tracksBySeason = data.reduce((acc, item) => {
//     const season = getSeason(item.ts);
//     const track = item.master_metadata_track_name;
//     const timePlayed = item.ms_played;

//     if (!acc[season]) {
//       acc[season] = {};
//     }

//     if (!acc[season][track]) {
//       acc[season][track] = 0;
//     }

//     acc[season][track] += timePlayed; // Adiciona o tempo tocado

//     return acc;
//   }, {});

//   // Ordenar as músicas por estação e pegar as top 5
//   const topTracksBySeason = Object.keys(tracksBySeason).map((season) => {
//     const tracks = tracksBySeason[season];
//     const sortedTracks = Object.entries(tracks)
//       .sort((a, b) => b[1] - a[1]) // Ordena pela quantidade de tempo tocado
//       .slice(0, 5); // Pega as top 5 músicas
//     return { season, tracks: sortedTracks };
//   });

//   return (
//     <div className= {styles.cards2Container}>
//       {topTracksBySeason.map((seasonData) => (
//         <div key={seasonData.season}>
//           <h3>{seasonData.season}</h3>
//           <ul>
//             {seasonData.tracks.map(([track, time]) => (
//               <li key={track}>
//                 <p>{track}</p>
//                 <p>{(time / 60000).toFixed(1)} minutos</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
