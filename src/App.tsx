import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  AboutPage,
  BlogPage,
  BlogPostPage,
  HomePage,
  Persevere2022Page,
  Persevere2023Page,
  TicketsPage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/persevere-2022" element={<Persevere2022Page />} />
      <Route path="/persevere-2023" element={<Persevere2023Page />} />
      <Route path="/tickets" element={<TicketsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
