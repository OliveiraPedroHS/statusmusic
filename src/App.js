// import "./App.css";
import React from "react";
import { HomePage } from "./pages/HomePage";
import sampleData from "./data/sampleData";

const newData = sampleData.filter(
  (e) => e.master_metadata_album_artist_name !== null
);
function App() {
  return (
    <div className="app-container">
      {/* Seção Análise de Dados do Artista */}
      {/* <ArtistComp data={newData} /> */}
      <HomePage data={sampleData} />
    </div>
  );
}

export default App;
