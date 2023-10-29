import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/App";
import MarvelService from './services/MarvelService';

const marvelService = new MarvelService();
marvelService.getAllCharacters().then(res => res.data.results.forEach(element => console.log(element.name)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
