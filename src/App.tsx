import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routers/AppRouter';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
