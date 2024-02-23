import styles from './Post.module.css'

import aboutCover from "assets/sobre_mim_capa.png";
import Markdown from 'react-markdown';

const ShowPost = ({ post }) => {
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

export default ShowPost
