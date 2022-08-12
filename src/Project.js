import React from 'react'
import Navbar from './Navbar'
import Bottom from './Bottom'
import './Project.css'
import Card from './Card'

function Project() {
  return (
    <>
    <Navbar page="project"/>
    <h1 className="heading1">.....My Projects.....</h1>
    <div className='cards_container'>
        
        <div className='first'>
            <Card link="" Name="Netflix Clone" content="Netflix Clone is a full functional Site including :React js, Node js,CSS ,HTML" color="#E83556"/>
            <Card link="https://northflex.netlify.app/" Name="Northflex" content="Northflex is a Company Site including: Algorithms,React js,Node js,CSS,HTML" color="#61D0D4"/>
           
        </div>
        <div className='second'>
            <Card link="http://vakarien.s3-website.eu-west-3.amazonaws.com/" Name="Vakarien" content="Vakarien is a job Search Static Site including : JavaScript, CSS, HTML" color="#61D0D4"/>
            <Card Name="Music Player" content="Music Player is a Static Site including : CSS, HTML" color="#E83556"/>
            
        </div>
    </div>
    
    <Bottom/>
    </>
  )
}

export default Project