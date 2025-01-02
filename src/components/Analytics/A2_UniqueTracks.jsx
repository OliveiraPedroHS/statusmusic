import React, { useEffect, useState } from "react";

// Componente para exibir o número total de músicas únicas ouvidas
const A2_UniqueTracks = ({ data, artistName }) => {
  const [uniqueTracks, setUniqueTracks] = useState(0);
  const [artistFromData, setArtistFromData] = useState(""); // Nome do artista da base de dados

  useEffect(() => {
    // Função para contar as músicas únicas para o artista selecionado
    const calculateUniqueTracks = () => {
      if (!artistName) return; // Se não houver artista, retorna

      // Filtrando os dados do artista selecionado
      const artistData = data.filter(
        (item) =>
          item.master_metadata_album_artist_name &&
          item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase()
      );

      // Usando Set para contar músicas únicas (pelo nome da música)
      const uniqueTrackNames = new Set(
        artistData.map((item) => item.master_metadata_track_name)
      );

      // Atualizando o estado com o número de músicas únicas
      setUniqueTracks(uniqueTrackNames.size);

      // Atualizando o nome do artista da base de dados
      if (artistData.length > 0) {
        setArtistFromData(artistData[0].master_metadata_album_artist_name);
      } else {
        setArtistFromData(""); // Reseta caso nenhum dado seja encontrado
      }
    };

    calculateUniqueTracks();
  }, [data, artistName]); // Sempre que o nome do artista ou os dados mudarem, recalcule

  return (
    <div>
      {/* <h3>
        Músicas Diferentes de{" "}
        <strong>{artistFromData || artistName}</strong>
      </h3> */}
      {uniqueTracks > 0 ? (
        <p>
          <strong>{uniqueTracks}</strong> músicas diferentes de <strong>{artistFromData || artistName}</strong> ouvidas.
        </p>
      ) : (
        <p>Nenhuma música encontrada para {artistFromData || artistName}.</p>
      )}
    </div>
  );
};

export default A2_UniqueTracks;

