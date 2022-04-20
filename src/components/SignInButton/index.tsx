import { signIn, signOut, useSession } from 'next-auth/react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import styles from './styles.module.scss'

export function SignInButton() {
  const { data: session }: any = useSession()

  return session ? (
    <>
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => signOut()}
      >
        <AiFillGoogleCircle color="#04d361" />
        {session.user.name}
      </button>
    </>
  ) : (
    <>
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => signIn('google')}
      >
        <AiFillGoogleCircle color="#D92424" />
        Entre com gmail
      </button>
    </>
  )
}
