import React from 'react'
import Navbar from './Navbar'
import Bottom from './Bottom'
import './Contact.css'

function Contact() {
  return (
    <>
        <Navbar page="contact"/>
        <div id="main">
            <div className="box box1">
                <p className='reason'>CONTACT :)</p>
            </div>
            <div className="box ">
                <p className="heading">
                    Looking forward to answering your email
                </p>
                <hr className="line" />
                <form >
                    <input className="support_input" name="name"  placeholder="Name" type="text" />
                    <input className="support_input" name="mobileno"  placeholder="Mobile Number" type="text" />
                    <input className="support_input" name="email"  placeholder="Email" type="text" />
                    <textarea className="support_input" name="message"  style={{ "resize": "vertical", "height": "100px" }} placeholder="Message" type="text"></textarea>
                    <div style={{ "width": "100%", "textAlign": "center" }}>
                        <button id="submit_form" type="submit">
                            SUBMIT
                        </button>
                    </div>
                </form>
        </div>

        </div>
        <Bottom/>
    </>
  )
}

export default Contact