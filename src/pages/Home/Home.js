import React from 'react'
import Header from '../../components/Header/Header'
import Carrossel from '../../components/Carrossel/Carrossel'
import SobreMim from '../../components/SobreMim/SobreMim'
import Footer from '../../components/Footer/Footer'
import Motivacao from '../../components/Motivacao/Motivacao'
import Metodologia from '../../components/Metodologia/Metodologia'
import Precos from '../../components/Precos/Precos'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Carrossel></Carrossel>
        <SobreMim></SobreMim>
        <Motivacao></Motivacao>
        <Metodologia></Metodologia>
        <Precos></Precos>
        <Footer></Footer>

      
    </div>
  )
}

export default Home
