import React from 'react'
import person from './images/person.jpg';
import './Main.css'
import Navbar from './Navbar';
import Bottom from './Bottom';
import { Link } from 'react-router-dom';
import Pdf from "./pdf/Resume.pdf"

function Main() {
    return (
        <>
            <Navbar page="home"/>
            <div className='main_holder'>
                <div className='holder'>

                    <div className='content'>
                        <h1 className='greetings'>Hello,</h1>
                        <p className='below_greeting'>a bit about me :</p>
                        <div className='circle_container'>
                            <a href={Pdf} rel="noreferrer" target="_blank" style={{textDecoration:"none"}}>
                                <div className="circle one">
                                    My Resume
                                </div>
                            </a>
                            <Link to="/project" style={{textDecoration:"none"}}>
                                <div className="circle two">
                                    My Project
                                </div>
                            </Link>
                            <Link to="contact" style={{textDecoration:"none"}}>
                                <div className="circle three">
                                    Contact Me
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className='para'>
                            Team player with strong oral and written communication skills and an analytical and problem solving aptitude.
                            Experienced in Coding, Web App Development, Backend and have good Competitive Programming Skills. President at CodeChef Chapter.
                            Excellent Leadership skills  and willingness to work a flexible schedule.
                            </div>
                        </div>
                    </div>
                    <div className='info'>
                        <img src={person} alt="..." className='photo' />
                        <h1 className="name" >Varun Kansal</h1>
                    </div>
                </div>
            </div>
            <Bottom/>
        </>
    )
}

export default Main