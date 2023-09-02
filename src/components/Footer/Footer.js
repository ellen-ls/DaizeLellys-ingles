import React from 'react'
import './Footer.css'

import telegram from '../Header/Img/telegram.png'
import instagram from '../Header/Img/instagram.png'
import tiktok from '../Header/Img/tiktok.png'
import youtube from '../Header/Img/youtube.png'



const Footer = () => {
  return (
    
    
    <footer className="footer">
    <div className="footer-content">
        <h2 id='contate-me' className='contact'>Contact</h2>
        <button className='button'>Clique aqui para assistir uma aula experimental</button>
        
        <div>
        <p className='p-sociais-footer'>Me siga nas redes sociais:</p>
        <img className='img-sociais-footer' src={instagram} alt=''/>
        <img className='img-sociais-footer' src={youtube} alt=''/>
        <img className='img-sociais-footer' src={tiktok} alt=''/>
        <img className='img-sociais-footer' src={telegram} alt=''/>
      </div>

    </div>
    
    <div className='employment'>
        <p>Desenvolvido por Els Development</p>
    </div>
</footer>
      
    
  )
}

export default Footer
