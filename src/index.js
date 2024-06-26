// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <Navbar/>

                <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
