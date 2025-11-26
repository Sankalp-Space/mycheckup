import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Vision from './components/Vision';
import KnowMyCheckup from './components/KnowMyCheckup';
import LegacyOfExcellence from './components/LegacyOfExcellence';
import TheMyCheckupEdge from './components/TheMyCheckupEdge';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">
        <section id="home" className="my-10">
          <h1 className="text-4xl font-bold text-center text-blue-700">Welcome to My Checkup</h1>
        </section>
        <Vision />
        <KnowMyCheckup />
        <LegacyOfExcellence />
        <TheMyCheckupEdge />
      </main>
      <Footer />
    </div>
  );
}

export default App;
