
// A6 Função para determinar a posição de um artista no ranking por plays
export const getArtistRanking = (data, artistName) => {
    const artists = data.reduce((acc, item) => {
      const artist = item.master_metadata_album_artist_name;
      if (artist) {
        acc[artist] = (acc[artist] || 0) + item.ms_played;
      }
      return acc;
    }, {});
  
    const sortedArtists = Object.entries(artists)
      .map(([artist, msPlayed]) => ({ artist, msPlayed }))
      .sort((a, b) => b.msPlayed - a.msPlayed);
  
    const position = sortedArtists.findIndex(artist => artist.artist.toLowerCase() === artistName.toLowerCase());

    const artisti = data
    .filter(item => item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase())

    return {position: position >= 0 ? position + 1 : null, artist: artisti.length !== 0 ? artisti[0].master_metadata_album_artist_name : ""}; // Retorna a posição ou null se não estiver no top 100
  };
  