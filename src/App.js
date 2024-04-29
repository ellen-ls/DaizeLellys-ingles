import React from 'react';
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js'
import { Routes, Route} from 'react-router-dom';
import Valores from './pages/Valores/Valores.js';


function App() {
  return (
  
    
     <div>
      
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sobre-mim" element={<Sobre/>} />
     <Route path='/valores' element={<Valores/>}></Route>
      
    </Routes>
     
     </div>
         
  
  );
}

export default App;
