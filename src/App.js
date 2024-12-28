import "./App.css";
import G8_Seasons from "./components/Analytics/G8_Seasons";
import G9_TracksBySeason from "./components/Analytics/G9_TracksBySeason";
import G10_ArtistsBySeason from "./components/Analytics/G10_ArtistsBySeason";
import A7_ArtistByTime from "./components/Analytics/A7_ArtistBySeason";

function App() {
  return (
    <div className="App">
      <A7_ArtistByTime />
      <G8_Seasons />
      <G9_TracksBySeason />
      <G10_ArtistsBySeason />
    </div>
  );
}

export default App;
