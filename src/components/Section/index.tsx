import styles from './styles.module.scss'

type Post = {
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

export function Section({ posts }: PostsProps) {
  return (
    <>
      <main className={styles.container}>

        <h1>Últimas Notícias</h1>
        
        <div className={styles.posts}>
          {posts.map((post) => (
            <article key={post.url}>
              <h2>{post.title}</h2>
              <p>{post.description}..</p>
              <a href={post.url} target='_blank'>Veja a matéria completa aqui</a>
              <img src={post.urlToImage ? post.urlToImage : 'https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg'} alt={post.title} />
              <time>{post.publishedAt}</time>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
