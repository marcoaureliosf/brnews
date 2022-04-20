import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1> <span>BR</span>.NEWS</h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Geral</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/negocios">
            <a>Negócios</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/entretenimento">
            <a>Entretenimento</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/saude">
            <a>Saúde</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/ciencia">
            <a>Ciência</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/esportes">
            <a>Esportes</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/tecnologia">
            <a>Tecnologia</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
