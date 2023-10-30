import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  AboutPage,
  BlogPage,
  HomePage,
  Persevere2022Page,
  TicketsPage,
} from './pages';
import { BlogPostPage } from './pages/BlogPostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/persevere-2022" element={<Persevere2022Page />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
