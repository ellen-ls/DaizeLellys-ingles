import React from 'react'
import './Carrossel.css'
import { Link} from 'react-router-dom'
import Header from '../Header/Header'


const Carrossel = () => {

  
  return (
    <div className='template' id='home'>
          <Header></Header>
          <h2 className='text1-carrossel'>Aprenda Inglês</h2>
          <h2 className='text2-carrossel'>Do modo mais divertido, </h2>
          <h2 className='text3-carrossel'>"Pense fora da caixa."</h2>
          <button className='btn-home'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Comece agora!</a></button>
         
          <div id='btn-flutuante'>
            <Link to={'/valores'}>Adquira já</Link>
           </div>
    </div>
  )}


export default Carrossel
