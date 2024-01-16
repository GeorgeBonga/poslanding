import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import LandingPage from './views/LandingPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>   
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
