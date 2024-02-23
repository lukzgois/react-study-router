import styles from './RecomendedPosts.module.css'
import posts from "json/posts.json"
import PostCard from "components/PostCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const RecomendedPosts = ({ currentPost }) => {
  const postsToShow = posts
    .filter(post => post.id !== currentPost.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])
  
  return (
    <div className={styles.recomendedPosts}>
      <h2>Outros posts que você pode gostar:</h2>

      <div className={styles.recomendedPostsContainer}>
        {postsToShow.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default RecomendedPosts
