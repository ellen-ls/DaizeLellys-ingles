import React from 'react';
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js'
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
  
    
     <div>
      
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sobre-mim" element={<Sobre/>} />
      
    </Routes>
     </div>
         
  
  );
}

export default App;
