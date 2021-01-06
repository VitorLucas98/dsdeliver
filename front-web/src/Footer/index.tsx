import React from 'react'
import './styles.css'
import { ReactComponent as YoutubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'


const Footer = () =>{
    return (
        <footer className='main-footer'>
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new"> 
                    <YoutubeIcon/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new"> 
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new"> 
                    <InstagramIcon/>
                </a>
            </div>
        </footer>
    );

}

export default Footer;