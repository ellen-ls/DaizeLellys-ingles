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
import Ebook from '../../components/Ebook/Ebook'


const Home = () => {
  return (
    <div>
        <Header></Header>
        <Carrossel></Carrossel>
        <SobreMim></SobreMim>
        <Cursos></Cursos>
        <Metodologia></Metodologia>
        <Precos></Precos>
        <Comentarios></Comentarios>
        <Motivacao></Motivacao>
        <Youtube></Youtube>
        {/* <Ebook></Ebook> */}
        <Footer></Footer>
      
    </div>
  )
}

export default Home
