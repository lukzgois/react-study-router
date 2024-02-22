import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styles from './Post.module.css'
import posts from "json/posts.json"
import aboutCover from "assets/sobre_mim_capa.png";
import Markdown from 'react-markdown';
import NotFoundPage from 'pages/NotFound';
import MainLayout from 'layouts/MainLayout';

const PostPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const post = posts.find(post => post.id === Number(params.id))

  if (!post) {
    return (
      <NotFoundPage />
    )
  }

  return (
    <Routes>
      <Route path="*" element={<MainLayout />}>
        <Route index element={
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
        } />
      </Route>
    </Routes>
  )
}

export default PostPage
