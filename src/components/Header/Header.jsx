import { useState } from 'react'

import { Link } from 'react-router-dom'

import { AiOutlineAppstore }  from 'react-icons/ai'

import Switch from '../Switch/Switch'

import { english, español } from '../../languages'

import Español from '../../assets/espanol.png'
import English from '../../assets/english.png'
import './header.css'

const Header = ({ language, setLanguage }) => {
    /*===========Change Background Header===========*/
    window.addEventListener("scroll", () => {
        const header = document.querySelector('.header')

        if(scrollY>=80) {
            header.classList.add('scroll-header')
        }else {
            header.classList.remove('scroll-header')
        }
    })

    /*===========Toggle Menu===========*/
    const [showMenu, setShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')
    
    return (
        <header className="header">
            <nav className="nav container">
                <div className='nav__logo-container'>
                    <Link to='/'>
                        <h3>Miguel Garcia</h3>
                    </Link>
                    <Switch language={language} />
                    <div className='nav__logo-flagcontainer'>
                        <img 
                            src={English} 
                            alt="eng-flag"
                            onClick={() => {setLanguage(english)}}
                            className={language.language === 'english'?'heartbeat':''}
                        />
                        <img 
                            src={Español} 
                            alt="esp-flag"
                            onClick={() => {setLanguage(español)}}
                            className={language.language === 'español'?'heartbeat':''}
                        />
                    </div>
                </div>

                <div className={showMenu?'nav__menu show-menu':'nav__menu'}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav==='#home'?'nav__link active__link':'nav__link'}>
                                <Link to='/' className='nav__link'>
                                    Home
                                </Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'nav__link active__link':'nav__link'}>
                                <Link to='/about' className='nav__link'>
                                    {language.header.about}
                                </Link>
                            </a>
                        </li>
                    </ul>

                    {/* <AiOutlineAppstore onClick={() => setShowMenu(!showMenu)} /> */}
                </div>
                <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <AiOutlineAppstore />
                </div>
            </nav>
        </header>
    )
}

export default Header