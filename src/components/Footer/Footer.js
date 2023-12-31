import React from 'react'
import './Footer.css'

import facebook from '../Header/Img/facebook.png'
import instagram from '../Header/Img/instagram.png'
import tiktok from '../Header/Img/tiktok.png'
import youtube from '../Header/Img/youtube.png'



const Footer = () => {
  return (
        
    <footer className="footer">
    <div className="footer-content">
        <h2 className='contact'>Contact</h2>
        <button className='button'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank' >Clique aqui para assistir uma aula experimental</a></button>
        
        <div>
        <p className='p-sociais-footer'>Me siga nas redes sociais:</p>
        <a href='https://www.instagram.com/teacherdaize_inglespelabiblia/' target='blank'><img className='img-sociais-footer' src={instagram} alt=''/></a>
       <a href='https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa' target='blank'><img className='img-sociais-footer' src={youtube} alt='' /></a>
       <a href='https://www.tiktok.com/@daizelellys_ingles' target='blank'><img className='img-sociais-footer' src={tiktok} alt=''/></a>
       <a href='https://www.facebook.com/daizelellys'target='blank'><img className='img-sociais-footer' src={facebook} alt=''/></a>
      </div>
          <a id='link-topo' href='#home'>⋀</a>
    </div>
    
    
    <div className='employment'>
        <p>Desenvolvido por Els Development</p>
    </div>
</footer>
      
    
  )
}

export default Footer
