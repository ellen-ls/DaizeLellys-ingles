import React from 'react'
import Header from '../../components/Header/Header'
import Carrossel from '../../components/Carrossel/Carrossel'
import SobreMim from '../../components/SobreMim/SobreMim'
import Footer from '../../components/Footer/Footer'
import Motivacao from '../../components/Motivacao/Motivacao'
import Metodologia from '../../components/Metodologia/Metodologia'
import Precos from '../../components/Precos/Precos'
import Comentarios from '../../components/Comentarios/Comentarios'

import { Youtube } from '../../components/Youtube/Youtube'
import Cursos from '../../components/Cursos/Cursos'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Carrossel></Carrossel>
        <SobreMim></SobreMim>
        <Cursos></Cursos>
        <Precos></Precos>
        <Motivacao></Motivacao>
        <Metodologia></Metodologia>
        <Youtube></Youtube>
        <Comentarios></Comentarios>
        <Footer></Footer>

      
    </div>
  )
}

export default Home
