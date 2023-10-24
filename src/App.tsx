import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  AboutPage,
  BlogPage,
  CharityPartnersPage,
  EventsPage,
  HomePage,
  Persevere2022Page,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/charity-partners" element={<CharityPartnersPage />} />
      <Route path="/persevere-2022" element={<Persevere2022Page />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
