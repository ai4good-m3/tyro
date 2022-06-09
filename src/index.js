import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NewEntry from './pages/NewEntry'
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <Home/>
    /*<BrowserRouter>
    <Routes>
      <Route exact path='/' component={Home} />
      <Route exact path="/newentry" component={NewEntry} />
    </Routes>
    </BrowserRouter>} */
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
