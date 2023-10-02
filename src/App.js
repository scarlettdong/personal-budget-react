import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import * as d3 from 'd3';
import React, { useState, useEffect } from 'react';
import './index.scss';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
