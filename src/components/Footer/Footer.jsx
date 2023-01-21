import React from 'react'

import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import './footer.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Miguel Garcia</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/fernandog197" className="footer__social-link" target='_blank'>
                        <BsGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" className="footer__social-link" target='_blank'>
                        <BsLinkedin />
                    </a>

                    <a href="https://twitter.com/MiguelF33016837" className="footer__social-link" target='_blank'>
                        <BsTwitter />
                    </a>
                </div>

                <span className="footer__copy">&#169; Miguel Garcia. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer