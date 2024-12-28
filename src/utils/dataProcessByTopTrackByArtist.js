
// A5 Função para listar as top 20 músicas de um artista por milissegundos em plays
export const getTopTracksByArtist = (orderedData, artistName, data) => {
    const tracks = orderedData
      .filter(item => item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase())
      .reduce((acc, item) => {
        const track = item.master_metadata_track_name;
        if (track) {
          acc[track] = (acc[track] || 0) + item.ms_played;
        }
        return acc;
      }, {});
      
    const artisti = data
    .filter(item => item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase())

    return {object: Object.entries(tracks)
      .map(([track, msPlayed]) => ({ track, msPlayed }))
      .sort((a, b) => b.msPlayed - a.msPlayed)
      .slice(0, 20),  artist: artisti.length !== 0 ? artisti[0].master_metadata_album_artist_name : ""}
  };