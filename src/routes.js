import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'App.css';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

import HomePage from 'pages/Home'
import AboutPage from 'pages/About'
import NotFoundPage from 'pages/NotFound'
import PostPage from 'pages/Post';

import MainLayout from 'layouts/MainLayout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sobremim" element={<AboutPage />} />
        </Route>

        <Route path="/posts/:id/*" element={<PostPage />} />

        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
