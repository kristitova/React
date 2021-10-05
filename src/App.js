import logo from './logo.svg';
import './App.css';
import { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/Routes';


function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>

  )
}

export default App;
