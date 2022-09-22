import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
