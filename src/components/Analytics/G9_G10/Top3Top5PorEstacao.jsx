import React, { useState } from "react";
import styles from "../../../Styles/Dashboard.module.css"; // Importa o CSS Module

function Top5MusicasPorEstacao({ data, selectedSeason }) {
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
    (item) => item.ts && item.master_metadata_track_name && item.ms_played
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

  const topTracks = tracksBySeason[selectedSeason]
    ? Object.keys(tracksBySeason[selectedSeason])
        .sort(
          (a, b) =>
            tracksBySeason[selectedSeason][b] -
            tracksBySeason[selectedSeason][a]
        )
        .slice(0, 5)
    : [];

  return (
    <div className={styles.listContainer}>
      <ul className={styles.trackList}>
        {topTracks.map((track) => (
          <li key={track} className={styles.trackItem}>
            {track}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Top3ArtistasPorEstacao({ data, selectedSeason }) {
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

  const topArtists = artistsBySeason[selectedSeason]
    ? Object.keys(artistsBySeason[selectedSeason])
        .sort(
          (a, b) =>
            artistsBySeason[selectedSeason][b] -
            artistsBySeason[selectedSeason][a]
        )
        .slice(0, 3)
    : [];

  return (
    <div className={styles.listContainer}>
      <ul className={styles.artistList}>
        {topArtists.map((artist) => (
          <li key={artist} className={styles.artistItem}>
            {artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Dashboard({ data }) {
  const [activeTab, setActiveTab] = useState("musicas");
  const [selectedSeason, setSelectedSeason] = useState("Inverno");

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.tabs}>
        <button
          onClick={() => setActiveTab("musicas")}
          className={`${styles.tabButton} ${
            activeTab === "musicas" ? styles.tabButtonActive : ""
          }`}
        >
          Top 5 Músicas
        </button>
        <button
          onClick={() => setActiveTab("artistas")}
          className={`${styles.tabButton} ${
            activeTab === "artistas" ? styles.tabButtonActive : ""
          }`}
        >
          Top 3 Artistas
        </button>
      </div>

      <div className={styles.seasonSelector}>
        <label htmlFor="seasonSelect">Escolha a estação do ano:</label>
        <select
          id="seasonSelect"
          value={selectedSeason}
          onChange={handleSeasonChange}
          className={styles.seasonSelect}
        >
          <option value="Inverno">Inverno</option>
          <option value="Primavera">Primavera</option>
          <option value="Verão">Verão</option>
          <option value="Outono">Outono</option>
        </select>
      </div>

      <div className={styles.content}>
        {activeTab === "musicas" && (
          <Top5MusicasPorEstacao data={data} selectedSeason={selectedSeason} />
        )}
        {activeTab === "artistas" && (
          <Top3ArtistasPorEstacao data={data} selectedSeason={selectedSeason} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
