import React from 'react'
import './Carrossel.css'


const Carrossel = () => {
  return (
    <div className='template' id='home'>
          
          <h2 className='text1-carrossel'>Aprenda Inglês</h2>
          <h2 className='text2-carrossel'>Do modo mais divertido, </h2>
          <div className='div-text3'><h2 className='text3-carrossel'>Pense fora da</h2><h2 className='text4-carrossel'>caixa.</h2></div>
          <button className='btn-home'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Comece agora!</a></button>
          <div id='btn-flutuante'>
            <a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Agende uma aula experimental!</a>
           </div>
    </div>
  )}


export default Carrossel
