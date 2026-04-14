/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import AIEngineer from './pages/AIEngineer';
import Products from './pages/Products';
import PlaceholderPage from './components/PlaceholderPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PlaceholderPage title="About Us" description="Discover the history, mission, and leadership behind Modina Rim & Parts Ltd." />} />
          <Route path="products" element={<Products />} />
          <Route path="quality" element={<PlaceholderPage title="Quality & Innovation" description="Learn about our rigorous quality assurance processes and international certifications." />} />
          <Route path="ai-engineer" element={<AIEngineer />} />
          <Route path="downloads" element={<PlaceholderPage title="Download Center" description="Access technical specifications, catalogs, and ISO certificates." />} />
          <Route path="news" element={<PlaceholderPage title="News & Events" description="Stay updated with the latest corporate news and upcoming industry events." />} />
          <Route path="blog" element={<PlaceholderPage title="Our Blog" description="Insights, technical articles, and industry trends from our experts." />} />
          <Route path="contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our sales and support teams." />} />
          <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" description="How we handle and protect your data." />} />
          <Route path="terms" element={<PlaceholderPage title="Terms of Service" description="The terms and conditions of using our website and services." />} />
        </Route>
      </Routes>
    </Router>
  );
}

