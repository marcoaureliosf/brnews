import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Section } from '../components/Section'

type Post = {
  category: string
  title: string
  author: string
  description: string
  content: string
  url: string
  urlToImage: string
  publishedAt: string
}

interface PostsProps {
  posts: Post[]
}

const Home = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>Geral | br.news</title>
      </Head>

      <Section posts={posts} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const category ='general'

  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&country=br&apiKey=${process.env.API_KEY}`
  ).then((response) => response.json())

  const posts = data.articles.map((post: Post) => {
    return {
      category: 'Geral',
      title: post.title,
      author: post.author,
      description: post.description,
      content: post.content,
      url: post.url,
      urlToImage: post.urlToImage,
      publishedAt: new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  })
 
  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
