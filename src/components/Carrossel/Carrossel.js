import React from 'react'
import './Carrossel.css'
import { Link} from 'react-router-dom'
import Header from '../Header/Header'

import { IoLogoWhatsapp } from "react-icons/io";


const Carrossel = () => {

  
  return (
    <div className='template' id='home'>
          <Header></Header>
          <div className='div-geral-carrossel'>
          <h2 className='text1-carrossel'>Sua teacher fora da caixa</h2>
          <h2 className='text2-carrossel'>Abra espaço para conhecer novas culturas</h2>
          <h2 className='text3-carrossel'>Aprenda inglês do modo mais divertido</h2>
          <button className='btn-home'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Comece agora!</a></button>
          </div>
        
         
          <div id='btn-flutuante'>
            <Link to={'/valores'}><IoLogoWhatsapp color='green'/></Link>
           </div>
    </div>
  )}


export default Carrossel
