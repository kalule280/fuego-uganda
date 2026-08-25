import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
import Support from './pages/Support';
import ManagementPortal from './pages/ManagementPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="portal" element={<ManagementPortal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;