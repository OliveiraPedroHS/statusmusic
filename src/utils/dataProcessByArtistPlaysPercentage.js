// A4 
// Função para calcular o percentual de plays de um artista específico
export const calculateArtistPlayPercentage = (data, artistName) => {
    const totalPlays = data.reduce((acc, item) => acc + item.ms_played, 0);
  
    const artistPlays = data
      .filter(item => item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase())
      .reduce((acc, item) => acc + item.ms_played, 0);

    const artisti = data
    .filter(item => item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase())
  
    //artist: artisti[0].master_metadata_album_artist_name ? artisti[0].master_metadata_album_artist_name : ""
  return {totalPlays:totalPlays > 0 ? (artistPlays / totalPlays) * 100 : 0, artist: artisti.length !== 0 ? artisti[0].master_metadata_album_artist_name : ""};
  };