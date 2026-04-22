/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AIEngineer from './pages/AIEngineer';
import Products from './pages/Products';
import About from './pages/About';
import Mission from './pages/Mission';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import Quality from './pages/Quality';
import Certificates from './pages/Certificates';
import Downloads from './pages/Downloads';
import News from './pages/News';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PlaceholderPage from './components/PlaceholderPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mission" element={<Mission />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="products" element={<Products />} />
          <Route path="quality" element={<Quality />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="ai-engineer" element={<AIEngineer />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

