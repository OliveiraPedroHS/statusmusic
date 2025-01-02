import React, { useState } from "react";

function Top5MusicasPorEstacao({ data }) {
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
      item.master_metadata_track_name &&
      item.ms_played &&
      item.master_metadata_track_name !== null
  );

  const tracksBySeason = validData.reduce((acc, item) => {
    const season = getSeason(item.ts);
    const track = item.master_metadata_track_name;

    if (!acc[season]) {
      acc[season] = {};
    }

    if (!acc[season][track]) {
      acc[season][track] = 0;
    }

    acc[season][track] += 1;

    return acc;
  }, {});

  const seasons = ["Inverno", "Primavera", "Verão", "Outono"];

  const topTracksBySeason = seasons.map((season) => {
    const tracks = tracksBySeason[season] || {};
    const sortedTracks = Object.keys(tracks)
      .sort((a, b) => tracks[b] - tracks[a])
      .slice(0, 5);
    return { season, tracks: sortedTracks };
  });

  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(0);

  const handleSeasonChange = (index) => {
    setCurrentSeasonIndex(index);
  };

  const currentSeason = topTracksBySeason[currentSeasonIndex];

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
              {currentSeason.tracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Top5MusicasPorEstacao;
