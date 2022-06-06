import React from 'react';
import About from './components/About/About';
import Nav from './components/About/Nav';
import './App.css';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
