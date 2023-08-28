import React from 'react'
import Header from '../Header/Header'
import Carrossel from '../Carrossel/Carrossel'
import SobreMim from '../SobreMim/SobreMim'
import Footer from '../Footer/Footer'
import Motivacao from '../Motivacao/Motivacao'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Carrossel></Carrossel>
        <SobreMim></SobreMim>
        <Motivacao></Motivacao>
        <Footer></Footer>

      
    </div>
  )
}

export default Home
