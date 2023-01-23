import React from 'react'
import './index.css';
//import Components:
import Footer from './Footer';
import Header from './Header';
import Plants from './Plants';

function App() {
  return (
    <div className="app">
      <Header />
      <Plants />
      <Footer />
    </div>
  );
}

export default App;
