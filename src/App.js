import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Skills} from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

// Esconder o componente skills até achar uma utilidade para ele, caso o insira novamente, colocar AWS como uma skill

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner/>
    <Skills/>
    </div>
  );
}

export default App;