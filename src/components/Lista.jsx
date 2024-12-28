import DropboxPeriodo from "./Dropbox";
import Card from "./Card";
import styles from "../Styles/Lista.module.css"

const Lista =({size, title, aggregatedData, sortedTracks, periodo, setPeriodo}) => {
  let data
  if(sortedTracks){
    data = Object.entries(aggregatedData)
      .map(([track, msPlayed]) => ({ track, msPlayed }))
      .sort((a, b) => b.msPlayed - a.msPlayed) // Ordena por milissegundos de plays
      .slice(0, 100);  // Pega as top 100 músicas

  }else{
    data = Object.entries(aggregatedData)
        .map(([artist, plays]) => ({ artist, plays }))
        .sort((a, b) => b.plays - a.plays)
        .slice(0, size);  // Pega os top 100 artistas
  }
    

    return(
      <section>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CO5c-LevI46UZ0K4xBIjk2PGKXH63K09MQ&s"></img>
        </div>
      <h2>{title}</h2>
      
      {/* Filtro de período */}
      <DropboxPeriodo periodo={periodo} setPeriodo={(e) => setPeriodo(e)}/>
      
      {/* Lista de top artistas */}
      <div className={styles.cards}>
        {!sortedTracks ? data.map((artist, index) => ( 
          <Card number = {index +1} title={artist.artist} info={`${artist.plays} plays`}/>
            )) : data.map((track, index) => (
          <Card number = {index +1} title={track.track} info={`${track.msPlayed} ms played`}/>
        ))}
      </div>
    </section>
    )
  }


export default Lista;