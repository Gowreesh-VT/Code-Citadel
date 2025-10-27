import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
