import React,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/engaca1" element = {<First_EN />} />
          <Route path = "/spanaca1" element = {<First_SP />} />
          <Route path = "/engaca2" element = {<Second_EN />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
