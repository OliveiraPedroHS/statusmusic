import React, { useState } from "react";

function Top3ArtistasPorEstacao({ data }) {
  const getSeason = (date) => {
    const month = new Date(date).getMonth();
    if (month === 11 || month < 2) {
      return "Inverno";
    } else if (month >= 2 && month < 5) {
      return "Primavera";
    } else if (month >= 5 && month < 8) {
      return "Verão";
    } else {
      return "Outono";
    }
  };

  const validData = data.filter(
    (item) =>
      item.ts &&
      item.master_metadata_album_artist_name &&
      item.ms_played &&
      item.master_metadata_album_artist_name !== null
  );

  const artistsBySeason = validData.reduce((acc, item) => {
    const season = getSeason(item.ts);
    const artist = item.master_metadata_album_artist_name;

    if (!acc[season]) {
      acc[season] = {};
    }

    if (!acc[season][artist]) {
      acc[season][artist] = 0;
    }

    acc[season][artist] += 1;

    return acc;
  }, {});

  const seasons = ["Inverno", "Primavera", "Verão", "Outono"];

  const topArtistsBySeason = seasons.map((season) => {
    const artists = artistsBySeason[season] || {};
    const sortedArtists = Object.keys(artists)
      .sort((a, b) => artists[b] - artists[a])
      .slice(0, 3);
    return { season, artists: sortedArtists };
  });

  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

  const handleSeasonChange = (index) => {
    setCurrentSeasonIndex(index);
  };

  const currentSeason = topArtistsBySeason[currentSeasonIndex];

  return (
    <div>
      <div className="buttons">
        {seasons.map((season, index) => (
          <button
            key={season}
            onClick={() => handleSeasonChange(index)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: index === currentSeasonIndex ? "#ccc" : "#fff",
              border: "1px solid #000",
              cursor: "pointer",
            }}
          >
            {season}
          </button>
        ))}
      </div>
      <div className="cards2-container">
        {currentSeason && (
          <>
            <ul>
              {currentSeason.artists.map((artist) => (
                <li key={artist}>{artist}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Top3ArtistasPorEstacao;
