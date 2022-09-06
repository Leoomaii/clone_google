import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Icon from '@mui/material/Icon'
import SearchPage from './pages/SearchPage';

function App() {

  return (
    
    // BEM
    <div className="App">
      {/* {Home Page (classic google search bar)} */}
      <Routes>
      <Route path='/' element={<Home/>}/>
     
      {/* SearchPage */}
      <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
