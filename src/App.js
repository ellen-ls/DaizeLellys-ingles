import React from 'react';
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js'
import { Routes, Route} from 'react-router-dom';
import NossosCursos from './pages/NossosCursos/NossosCursos.js';





function App() {
  return (
  
    
     <div>
      
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sobre-mim" element={<Sobre/>} />
     <Route path='/cursos' element={<NossosCursos/>}></Route> 
    
         
    </Routes>
     </div>
         
  
  );
}

export default App;
