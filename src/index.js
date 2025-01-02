import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import G12_Top100Tracks from "./components/Analytics/G12_Top100Tracks";
import sampleData from "./data/sampleData";
import { ArtistComp } from "./pages/ArtistComponent";
import ListasTop100 from "./pages/ListasTop100";

const newData = sampleData.filter(
  (e) => e.master_metadata_album_artist_name !== null
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/top100" element={<ListasTop100/>}/>
        <Route path="/artist" element={<ArtistComp data={newData}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
