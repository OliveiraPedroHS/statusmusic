import React, { useEffect, useState } from "react";

// Componente para exibir o total de minutos ouvidos do artista
const A3_TotalMinutes = ({ data, artistName }) => {
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [artistFromData, setArtistFromData] = useState(""); // Nome do artista da base de dados

  useEffect(() => {
    // Função para calcular o total de minutos ouvidos
    const calculateTotalMinutes = () => {
      if (!artistName) return; // Se não houver artista, retorna

      // Filtrando os dados para pegar apenas os do artista selecionado
      const artistData = data.filter(
        (item) =>
          item.master_metadata_album_artist_name &&
          item.master_metadata_album_artist_name.toLowerCase() === artistName.toLowerCase()
      );

      // Somando todos os milissegundos tocados
      const totalMsPlayed = artistData.reduce((acc, item) => acc + item.ms_played, 0);

      // Convertendo milissegundos para minutos (1 minuto = 60000 milissegundos)
      const minutes = totalMsPlayed / 60000;

      // Atualizando o estado com o total de minutos
      setTotalMinutes(minutes.toFixed(2)); // Exibindo até 2 casas decimais

      // Atualizando o nome do artista da base de dados
      if (artistData.length > 0) {
        setArtistFromData(artistData[0].master_metadata_album_artist_name);
      } else {
        setArtistFromData(""); // Reseta caso nenhum dado seja encontrado
      }
    };

    calculateTotalMinutes();
  }, [data, artistName]); // Sempre que o nome do artista ou os dados mudarem, recalcule

  return (
    <div>
      <h3><strong>{artistFromData || artistName}</strong> foi ouvido por</h3>
      {totalMinutes > 0 ? (
        <p>
          <strong>{totalMinutes}</strong> minutos
        </p>
      ) : (
        <p>Nenhuma informação encontrada para {artistFromData || artistName}.</p>
      )}
    </div>
  );
};

export default A3_TotalMinutes;

