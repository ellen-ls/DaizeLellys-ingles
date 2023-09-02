import React from 'react';
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js'
import { Routes, Route} from 'react-router-dom';
import Cursos from './components/Cursos/Cursos.js';
import Metodologia from './components/Metodologia/Metodologia.js';




function App() {
  return (
  
    
     <div>
      
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sobre-mim" element={<Sobre/>} />
     <Route path='/cursos' element={<Metodologia/>}></Route> 
     <Route path='/cursos' element={<Cursos/>}></Route>
         
    </Routes>
     </div>
         
  
  );
}

export default App;
