import { useEffect } from 'react'

import { MdTaskAlt } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import './about.css'

const About = () => {
    useEffect(() => {
        scroll(0, 0)
    }, [])

    return (
        <div className='about__container container'>
            <p>This project belongs to the portfolio of <strong>Miguel Garcia</strong>. You can visit it clicking <a href="" target='_blank'>here</a>.</p>
            <br />
            <h2>About this project</h2>
            <p>
                This project implements a simple task manager (also known as a ToDo List), which allows you to create, display, edit, and delete tasks (represented in the UI by simple text entered by the user). <br /> <br />
                As is well known in the community, this type of project is focused on the backend, more specifically on the four basic interactions that can be performed with a database: Create, Read, Update and Delete(CRUD). <br /> <br />
                Despite this, we also sought to create a pleasant interface, which allows you to navigate through the tasks as an ordinary user would.
            </p>
            <br />
            <h3>Technical description</h3>
            <p>
                Although a Task Manager (ToDo list) is an application commonly used to show correct CRUD management, I always had in mind to accompany it with a nice and user-friendly UI. <br /> <br />
                This poses some challenges as, due to the nature of the project, it is not possible to use local or global state within React; each user action must be reflected in the database and, in turn, these changes must have a feedback in the UI. As is natural, this generates a high number of asynchronous calls, which must be developed without affecting the performance of the application or the user interface. <br /> <br />
                Once the project is over, I proudly believe that this goal was achieved. <br /> <br />
                Below is a specific detail of the technologies used: <br /> <br />
            </p>
            <h3>BackEnd:</h3>
            <ul className='about__list'>
                <li><MdTaskAlt /> NodeJs</li>
                <li><MdTaskAlt /> ExpressJs</li>
                <li><MdTaskAlt /> MongoDB Atlas</li>
                <li><MdTaskAlt /> Mongoose (ORM)</li>
            </ul>
            <br />
            <p>In addition, the following libraries were used:</p>
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
            <p>In addition, the following libraries were used:</p>
            <ul className='about__list'>
                <li><MdTaskAlt /> axios</li>
                <li><MdTaskAlt /> react-icons</li>
                <li><MdTaskAlt /> react-router-dom</li>
            </ul><br /><br />
            <p>You can access the project repositories by following the links below:</p><br /><br />
            <div className='about__repositories'>
                <div className='about__repositories-repository'>
                    <p>task-manager.backend</p>
                    <BsGithub size='1.5rem' />
                </div>
                <div className='about__repositories-repository'>
                    <p>task-manager.frontend</p>
                    <BsGithub size='1.5rem' />
                </div>
            </div><br /><br />
            <h2>About the developer</h2>
            <p>
                My name is Miguel Fernando Garcia, Full Stack Developer and passionate about the IT world.
                I am excited to learn new things as much as to apply them in a project.
                If you want to know more about me and/or my work, you are welcome to visit my portfolio or any of my social networks that I attach below (just click on the link of your interest). <br /> <br />
                Thank you very much for your visit! :D
            </p>
            <br />
            <br />
            <div className='about__contact'>
                <a href="" className='about__contact-link'>
                    <BsBriefcaseFill className='about__contact-icon' />
                </a>
                <a href="" className='about__contact-link'>
                    <BsGithub className='about__contact-icon' />
                </a>
                <a href="" className='about__contact-link'>
                    <BsLinkedin className='about__contact-icon' />
                </a>
                <a href="" className='about__contact-link'>
                    <BsTwitter className='about__contact-icon' />
                </a>
                <a href="" className='about__contact-link'>
                    <MdEmail className='about__contact-icon' />
                </a>
            </div>
            <br />
            <br />
        </div>
    )
}

export default About