import React from 'react'
import './Footer.css'
import {RxInstagramLogo} from 'react-icons/rx'
import {AiOutlineFacebook} from 'react-icons/ai'
import {CiLinkedin} from 'react-icons/ci'



const Footer = () => {
  return (
    
    
    <footer className="footer">
    <div className="footer-content">
        <h2 id='contate-me' className='contact'>Contact</h2>
        <button className='button'>Click here to schedule a free class</button>
        <p>CONNECT WITH ME</p>
<a href='intsagram'><RxInstagramLogo className='icons'></RxInstagramLogo></a>
<a href='facebook'><AiOutlineFacebook className='icons'></AiOutlineFacebook></a>
<a href='linkedin'><CiLinkedin className='icons'></CiLinkedin></a>

    </div>
    
    <div className='employment'>
        <p>Desenvolvido por Els Development</p>
    </div>
</footer>
      
    
  )
}

export default Footer
