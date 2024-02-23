import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import posts from "json/posts.json"
import NotFoundPage from 'pages/NotFound';
import MainLayout from 'layouts/MainLayout';
import ShowPost from './show'
import RecomendedPosts from './recomended_posts'

const PostPage = () => {
  const params = useParams()
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
          <>
            <ShowPost post={post} />
            <RecomendedPosts currentPost={post} />
          </>
        } />
      </Route>
    </Routes>
  )
}

export default PostPage
