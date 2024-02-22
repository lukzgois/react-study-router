import { useParams } from 'react-router-dom'
import styles from './Post.module.css'
import posts from "json/posts.json"
import aboutCover from "assets/sobre_mim_capa.png";
import Markdown from 'react-markdown';

const PostPage = () => {
  const params = useParams()
  const post = posts.find(post => post.id === Number(params.id))

  return (
    <article className={styles.postContainer}>
      <div
        className={styles.coverPicture}
        style={{ backgroundImage: `url(${aboutCover})` }}
      ></div>

      <h2 className={styles.title}>
          {post.titulo}
      </h2>

      <div className={styles.postContentContainer}>
        <div className={styles.postMarkdownContainer}>
          <Markdown>
            {post.texto}
          </Markdown>
        </div>
      </div>
    </article>
  )
}

export default PostPage
