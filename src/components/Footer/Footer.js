import React from 'react'
import './Footer.css'

import telegram from '../Header/Img/telegram.png'
import instagram from '../Header/Img/instagram.png'
import facebook from '../Header/Img/facebook.png'
import linkedin from '../Header/Img/linkedin.png'



const Footer = () => {
  return (
    
    
    <footer className="footer">
    <div className="footer-content">
        <h2 id='contate-me' className='contact'>Contact</h2>
        <button className='button'>Clique aqui para assistir uma aula experimental</button>
        <p>CONNECT WITH ME</p>
        <div>
        <p className='p-sociais-footer'>Me siga nas redes sociais:</p>
        <img className='img-sociais-footer' src={telegram} alt=''/>
        <img className='img-sociais-footer' src={instagram} alt=''/>
        <img className='img-sociais-footer' src={facebook} alt=''/>
        <img className='img-sociais-footer' src={linkedin} alt=''/>
      </div>

    </div>
    
    <div className='employment'>
        <p>Desenvolvido por Els Development</p>
    </div>
</footer>
      
    
  )
}

export default Footer
