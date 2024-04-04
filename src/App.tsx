import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';


import Fifth_SP from './pages/5_sp';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
      
     
        
          <Route index element = {<Fifth_SP />} />

     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
