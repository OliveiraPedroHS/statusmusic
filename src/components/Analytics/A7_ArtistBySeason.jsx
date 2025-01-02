import React, { useEffect, useState } from "react";

const A7_ArtistBySeason = ({ data, artistName }) => {
  const [mostPlayedSeason, setMostPlayedSeason] = useState(null);

  useEffect(() => {
    if (!artistName) return;

    // Filtrar os dados pelo artista
    const artistData = data.filter(
      (item) =>
        item.master_metadata_album_artist_name &&
        item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase()
    );

    if (artistData.length === 0) {
      setMostPlayedSeason(null);
      return;
    }

    // Capturar o nome real do artista da base de dados
    const actualArtistName = artistData[0].master_metadata_album_artist_name;

    // Mapear o tempo total por estação
    const seasonData = artistData.reduce(
      (acc, item) => {
        const month = new Date(item.ts).getMonth(); // Obter o mês (0 = Janeiro, 11 = Dezembro)

        if (month >= 2 && month <= 4) {
          acc["Primavera"] += item.ms_played;
        } else if (month >= 5 && month <= 7) {
          acc["Verão"] += item.ms_played;
        } else if (month >= 8 && month <= 10) {
          acc["Outono"] += item.ms_played;
        } else {
          acc["Inverno"] += item.ms_played;
        }

        return acc;
      },
      { Primavera: 0, Verão: 0, Outono: 0, Inverno: 0 }
    );

    // Determinar a estação mais ouvida
    const [topSeason] = Object.entries(seasonData).sort((a, b) => b[1] - a[1]);

    setMostPlayedSeason({
      artist: actualArtistName,
      season: topSeason[0],
      time: (topSeason[1] / 60000).toFixed(2), // Converter milissegundos para minutos
    });
  }, [artistName, data]);

  return (
    <div>
      {/* <h2>Quando o utilizador mais ouve o artista?</h2> */}
      {mostPlayedSeason ? (
        <p>
          <strong>{mostPlayedSeason.artist}</strong> é mais ouvido na estação:{" "}
          <strong>{mostPlayedSeason.season}</strong>
           {/* com um total de{" "}<strong>{mostPlayedSeason.time} minutos</strong>. */}
        </p>
      ) : (
        <p>Insira o nome de um artista válido para ver os dados.</p>
      )}
    </div>
  );
};

export default A7_ArtistBySeason;



