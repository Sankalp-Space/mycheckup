import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Vision from './components/Vision';
import KnowMyCheckup from './components/KnowMyCheckup';
import LegacyOfExcellence from './components/LegacyOfExcellence';
import TheMyCheckupEdge from './components/TheMyCheckupEdge';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Vision />
              <KnowMyCheckup />
              <LegacyOfExcellence />
              <TheMyCheckupEdge />
            </>
          } />
          {/* Redirect all other known pages to Coming Soon */}
          <Route path="/login" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/tests" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/packages" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Catch all other unknown routes */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
