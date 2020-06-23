import React from 'react';
import logo from './logo.svg';
import './App.css';
import Options from './components/Options';
import BottomNav from './components/BottomNav';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Options/>
      <BottomNav/>
    </div>
  );
}

export default App;
