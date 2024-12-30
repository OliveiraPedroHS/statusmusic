import "./App.css";
import G9_TracksBySeason from "./components/Analytics/G9_TracksBySeason";
import G10_ArtistsBySeason from "./components/Analytics/G10_ArtistsBySeason";

function App() {
  return (
    <div className="App">
      <G9_TracksBySeason />
      <G10_ArtistsBySeason />
    </div>
  );
}

export default App;
