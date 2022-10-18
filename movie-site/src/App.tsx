import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/action_creators/user_action_creator';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("jwtAccess");
    if(accessToken) {
      dispatch(getUser())
    }
  }, [localStorage.getItem("jwtAccess")])
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
