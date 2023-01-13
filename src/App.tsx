import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';

import Visits from "./pages/visits";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/engaca1" element = {<First_EN />} />
          <Route path = "/spanaca1" element = {<First_SP />} />
          <Route path = "/engaca2" element = {<Second_EN />} />
          <Route path = "/spanaca2" element = {<Second_SP />} />
          <Route path = "/engmed1" element = {<Third_EN />} />

          <Route path = "/daily-america-savings-view" element = {<Visits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
