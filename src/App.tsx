import React from 'react'
import Home from './view/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';


export default function App() {
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  );
}
