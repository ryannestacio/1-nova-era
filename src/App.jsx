import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FooterView from './components/FooterView';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/:serviceId" element={<ServicePage />} />
          <Route path="/assessoria/:serviceId" element={<ServicePage />} />
        </Routes>
        <FooterView />
      </div>
    </Router>
  );
}

export default App;
