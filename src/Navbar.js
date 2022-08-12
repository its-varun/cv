import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Pdf from "./pdf/Resume.pdf"

function Navbar({page}) {
    var clr1="";
    var clr2="";
    var clr3="";
    if(page==="home"){
        clr1="#61D0D4";
    }
    else if(page==="project"){
        clr2="#61D0D4";
    }
    else if(page==="contact"){
        clr3="#61D0D4";
    }
  return (
    <div className='container' >
        <div className='nav_holder'>
            <Link to="/"className='nav' style={{color:`${clr1}`}}>
                HOME
            </Link>
            <Link to="/project"className='nav' style={{color:`${clr2}`}}>
                PROJECTS
            </Link>
            <a href={Pdf} rel="noreferrer" target="_blank" className='nav'>
                RESUME
            </a>
            <Link to="/contact"className='nav' style={{color:`${clr3}`}}>
                CONTACT
            </Link>
        </div>
    </div>
  )
}

export default Navbar