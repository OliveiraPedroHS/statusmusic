import styles from "../Styles/Card.module.css"

const Card = ({number,title, info}) => {
    return(
      <div className={styles.all}>
              {/* Retângulo simulando a imagem */}
      <div className={styles.cardImagePlaceholder}></div>
            {/* Numeração */}
            <div className={styles.cardNumber}>{number}</div>
        <div>{title}</div>
        <div>{info}</div>
      </div>
    )
  }

  export default Card;