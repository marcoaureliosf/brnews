import styles from './styles.module.scss'

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

export function Section({ posts }: PostsProps) {
  return (
    <>
      <main className={styles.container}>

        <h1>Últimas Notícias: {posts[0].category}</h1>
        
        <div className={styles.posts}>
          {posts.map((post) => (
            <article key={post.title}>
              <h2>{post.title}</h2>
              <p>{String( post.description)}..</p>
              <a href={post.url} target='_blank' rel='noopener'>Veja a matéria completa aqui</a>
              <img src={post.urlToImage ? post.urlToImage : '/images/default-Img.jpg'} alt={post.title} />
              <time>{post.publishedAt}</time>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
