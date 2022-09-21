import React from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Movie } from './components/Movie';
import { Movies } from './components/Movies';
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
