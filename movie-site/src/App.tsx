import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/action_creators/user_action_creator';
import { StoreState } from './types';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: StoreState) => state.theme.theme);

  useEffect(() => {
    const accessToken = localStorage.getItem("jwtAccess");
    if(accessToken) {
      dispatch(getUser())
    }
  }, [localStorage.getItem("jwtAccess")])
  return (
    <div className={`App App-${theme}`}>
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
