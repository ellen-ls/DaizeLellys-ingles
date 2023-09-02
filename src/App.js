import React from 'react';
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js'
import { Route, Routes,BrowserRouter } from 'react-router-dom';



function App() {
  return (
  
     <BrowserRouter>
     <div>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sobre-mim" element={<Sobre/>} />
    </Routes>
     </div>
    </BrowserRouter>      
  
  );
}

export default App;
