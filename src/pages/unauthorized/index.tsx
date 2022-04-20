import type { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { SiAdblock } from 'react-icons/si'
import styles from './styles.module.scss'

const Unauthorized = () => {
  return (
    <>
      <Head>
        <title>Unauthorized | br.news</title>
      </Head>

      <main className={styles.container}>
        <SiAdblock size={150} />
        <section className={styles.content}>
          <h1>401</h1>
          <h2>Erro ao tentar acessar a página!</h2>
          <p>Logue com sua conta do Google para acessar esta categoria.</p>
        </section>
      </main>
    </>
  )
}

export default Unauthorized

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  
  if(session) {
    return {
        redirect: {
            destination: "/",
            permanent: false
        }
    }
  } 
  
  return {
    props: {},
  }
}
