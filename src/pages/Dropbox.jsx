import styles from "../Styles/Dropbox.module.css"
const DropboxPeriodo = ({periodo, setPeriodo}) => {

    return (
      <label className={styles.drop}>
        Selecione o período:
        <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
          <option value="Últimas 4 semanas">Últimas 4 Semanas</option>
          <option value="Últimos 6 meses">Últimos 6 Meses</option>
          <option value="Último ano">Último Ano</option>
          <option value="Desde sempre">Desde Sempre</option>
        </select>
      </label>
    )
  }

export default DropboxPeriodo;