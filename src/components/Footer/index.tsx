import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <ul>
          <h2>News</h2>

          <li>
            <a href="/">Geral</a>
          </li>
          <li>
            <a href="/negocios">Negócios</a>
          </li>
          <li>
            <a href="/entretenimento">Entretenimento</a>
          </li>
          <li>
            <a href="/saude">Saúde</a>
          </li>
          <li>
            <a href="/ciencia">Ciência</a>
          </li>
          <li>
            <a href="/esportes">Esportes</a>
          </li>
          <li>
            <a href="/tecnologia">Tecnologia</a>
          </li>
        </ul>

        <p>
          <a href="https://github.com/marcoaureliosf">
            &copy; 2022 br.news by Marco Aurélio.
          </a>
        </p>
      </div>
    </footer>
  )
}
