import Link from 'next/link'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <ul>
          <h2>News</h2>

          <li>
            <Link href="/">
              <a>Geral</a>
            </Link>
          </li>
          <li>
            <Link href="/negocios">
              <a>Negócios</a>
            </Link>
          </li>
          <li>
            <Link href="/entretenimento">
              <a>Entretenimento</a>
            </Link>
          </li>
          <li>
            <Link href="/saude">
              <a>Saúde</a>
            </Link>
          </li>
          <li>
            <Link href="/ciencia">
              <a>Ciência</a>
            </Link>
          </li>
          <li>
            <Link href="/esportes">
              <a>Esportes</a>
            </Link>
          </li>
          <li>
            <Link href="/tecnologia">
              <a>Tecnologia</a>
            </Link>
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
