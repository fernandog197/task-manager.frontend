import { useEffect } from 'react'

import { MdTaskAlt } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import './about.css'

const About = ({ language }) => {
    useEffect(() => {
        scroll(0, 0)
    }, [])

    return (
        <div className='about__container container'>
            <p>{language.about.text01}<strong>Miguel Garcia</strong>{language.about.text02}<a href="" target='_blank'>{language.about.here}</a>.</p>
            <br />
            <h2>{language.about.title01}</h2>
            <p>
                {language.about.p01Text01}<br /><br />
                {language.about.p01Text02} <br /><br />
                {language.about.p01Text03}
            </p>
            <br />
            <h3>{language.about.subTitle01}</h3>
            <p>
                {language.about.p02Text01} <br /> <br />
                {language.about.p02Text02} <br /> <br />
                {language.about.p02Text03} <br /> <br />
                {language.about.p02Text04} <br /> <br />
            </p>
            <h3>BackEnd:</h3>
            <ul className='about__list'>
                <li><MdTaskAlt /> NodeJs</li>
                <li><MdTaskAlt /> ExpressJs</li>
                <li><MdTaskAlt /> MongoDB Atlas</li>
                <li><MdTaskAlt /> Mongoose (ORM)</li>
            </ul>
            <br />
            <p>{language.about.libraries}</p>
            <ul className='about__list'>
                <li><MdTaskAlt /> cors</li>
                <li><MdTaskAlt /> dotenv</li>
                <li><MdTaskAlt /> morgan</li>
            </ul><br /><br />
            <h3>FrontEnd:</h3>
            <ul className='about__list'>
                <li><MdTaskAlt /> ReactJs</li>
            </ul>
            <br />
            <p>{language.about.libraries}</p>
            <ul className='about__list'>
                <li><MdTaskAlt /> axios</li>
                <li><MdTaskAlt /> react-icons</li>
                <li><MdTaskAlt /> react-router-dom</li>
            </ul><br /><br />
            <p>{language.about.repositories}</p><br /><br />
            <div className='about__repositories'>
                <div className='about__repositories-repository'>
                    <a href="https://github.com/fernandog197/task-manager.backend" target='_blank' className='about__contact-link'><p>task-manager.backend</p></a>
                    <BsGithub size='1.5rem' />
                </div>
                <div className='about__repositories-repository'>
                    <a href="https://github.com/fernandog197/task-manager.frontend" target='_blank' className='about__contact-link'><p>task-manager.frontend</p></a>
                    <BsGithub size='1.5rem' />
                </div>
            </div><br /><br />
            <h2>{language.about.title02}</h2>
            <p>
                {language.about.p03Text01} <br /> <br />
                {language.about.p03Text02}
            </p>
            <br />
            <br />
            <div className='about__contact'>
                <a href="https://miguelgarcia-portfolio.netlify.app/" target='_blank' className='about__contact-link'>
                    <BsBriefcaseFill className='about__contact-icon' />
                </a>
                <a href="https://github.com/fernandog197" target='_blank' className='about__contact-link'>
                    <BsGithub className='about__contact-icon' />
                </a>
                <a href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" target='_blank' className='about__contact-link'>
                    <BsLinkedin className='about__contact-icon' />
                </a>
                <a href="https://twitter.com/MiguelF33016837" target='_blank' className='about__contact-link'>
                    <BsTwitter className='about__contact-icon' />
                </a>
                <a href="mailto:bluewavesalta@gmail.com" target='_blank' className='about__contact-link'>
                    <MdEmail className='about__contact-icon' />
                </a>
            </div>
            <br />
            <br />
        </div>
    )
}

export default About