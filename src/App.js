import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';  
import 'font-awesome/css/font-awesome.min.css'; 
import SearchPage from './Pages/SearchPage';
import Saveditems from './Pages/Saveditems';
import Property1 from './property/Property1';
import Property2 from './property/Property2';
import Property3 from './property/Property3';
import Property4 from './property/Property4';
import Property5 from './property/Property5';
import Property6 from './property/Property6';
import Property7 from './property/Property7';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Routes>
          <Route path="/saved" element={<Saveditems />} />
        </Routes>

        <Routes>
          <Route path='/property1' element={<Property1 />}></Route>
        </Routes>
        <Routes>
          <Route path='/property2' element={<Property2 />}></Route>
        </Routes>
        <Routes>
          <Route path='/property3' element={<Property3 />}></Route>
        </Routes>
        <Routes>
          <Route path='/property4' element={<Property4 />}></Route>
        </Routes>
        <Routes>
          <Route path='/property5' element={<Property5 />}></Route>
        </Routes>
        <Routes>
          <Route path='/property6' element={<Property6 />}></Route>
        </Routes>
        <Routes>
          <Route path='/property7' element={<Property7 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
