import React, { useEffect, useState } from "react";

// Componente para exibir o total de plays do artista
const A1_TotalPlays = ({ data, artistName }) => {
  const [totalPlays, setTotalPlays] = useState(0);
  const [artistFromData, setArtistFromData] = useState(""); // Nome do artista da base de dados

  useEffect(() => {
    // Função para calcular o total de plays para o artista selecionado
    const calculateTotalPlays = () => {
      if (!artistName) return; // Se não houver artista, retorna

      // Filtrando os dados do artista selecionado
      const artistData = data.filter(
        (item) =>
          item.master_metadata_album_artist_name &&
          item.master_metadata_album_artist_name.toLowerCase() ===
            artistName.toLowerCase()
      );

      // O total de plays é o número de vezes que o artista aparece no data
      const total = artistData.length;

      // Atualizando o estado com o total de plays
      setTotalPlays(total);

      // Atualizando o nome do artista da base de dados
      if (artistData.length > 0) {
        setArtistFromData(artistData[0].master_metadata_album_artist_name);
      } else {
        setArtistFromData(""); // Reseta caso nenhum dado seja encontrado
      }
    };

    calculateTotalPlays();
  }, [data, artistName]); // Sempre que o nome do artista ou os dados mudarem, recalcule o total

  return (
    <div>
      <h3>
        Total de Plays de <strong>{artistFromData || artistName}</strong>
      </h3>
      {totalPlays > 0 ? (
        <p>
          <strong>{totalPlays}</strong> plays
        </p>
      ) : (
        <p>Nenhum dado encontrado para {artistFromData || artistName}.</p>
      )}
    </div>
  );
};

export default A1_TotalPlays;
