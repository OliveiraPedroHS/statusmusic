import { useState } from "react";
import sampleData from "../data/sampleData";
import G12_Top100Tracks from "../components/Analytics/G12_Top100Tracks";
import G11_Top100Artists from "../components/Analytics/G11_Top100Artists";
import { NavBar } from "./NavBar";

const newData = sampleData.filter(
  (e) => e.master_metadata_album_artist_name !== null
);

export default function ListasTop100() {
  const [state, setState] = useState(false);
  return (
    <div>
      <NavBar />
      {state ? (
        <G11_Top100Artists
          data={newData}
          onClick={() => setState(false)}
          estado={state}
        />
      ) : (
        <G12_Top100Tracks
          data={newData}
          onClick={() => setState(true)}
          estado={state}
        />
      )}
    </div>
  );
}
