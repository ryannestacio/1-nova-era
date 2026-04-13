import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import FooterView from './components/FooterView';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const basename = import.meta.env.BASE_URL;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/:serviceId" element={<ServicePage />} />
          <Route path="/assessoria/:serviceId" element={<ServicePage />} />
          <Route path="/escritorio" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
        <FooterView />
      </div>
    </Router>
  );
}

export default App;
