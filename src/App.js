import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './home';
import View from './view';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Home />} />
      <Route  path="/view/:id" element={<View />}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
