import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import HomePage from './components/homepage/homepage';
import './styles.css';

function App() {

  const pathname = window.location.pathname;

  return (
    <div className="App">
      <Router pathname={pathname}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
