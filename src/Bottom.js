import React from 'react'
import './Bottom.css'
function Bottom() {
  return (
    <div className="bottom" >
        <div className='bottom_container'>
            <div >
            <a href="mailto:varunkansal2111@gmail.com" className='text' style={{textDecoration:"none"}}>
                    <i class="fa-solid fa-envelope"></i>
                </a>
                <a href="mailto:varunkansal2111@gmail.com" className='text1' style={{textDecoration:"none"}}>
                    <span >
                        varunkansal2111@gmail.com
                    </span>
                </a>
            </div>
            <div >
                <a href="tel:+91 8699344136" style={{textDecoration:"none"}} className='text'>
                    <i class="fa-solid fa-mobile"></i>
                </a>
                <a href="tel:+91 8699344136" style={{textDecoration:"none"}} className='text1'>
                    <span >
                        +91 8699344136
                    </span>
                </a>
            </div>

        </div>
        <div className='icons'>
            <a rel="noreferrer" href="https://wa.me/+918699344136?text=Hello want to know something.............." className='social'  target="_blank">
                <i style={{marginRight:"10px"}} class="fa-brands fa-whatsapp"></i>
            </a>
            <a rel="noreferrer" href="https://instagram.com/varunkansal21?igshid=YmMyMTA2M2Y=" className='social'  target="_blank">
            <i style={{marginRight:"10px"}} class="fa-brands fa-instagram"></i>
            </a>
            <a rel="noreferrer" href="https://twitter.com/Varun47639328?t=ApOIOO6R7Cq0UojDsWdbdg&s=08" className='social'  target="_blank">
            <i style={{marginRight:"10px"}} class="fa-brands fa-twitter"></i>
            </a>
            <a rel="noreferrer" href="https://github.com/its-varun"  target="_blank" className='social'>
            <i style={{marginRight:"10px"}} class="fa-brands fa-github"></i>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/varun-kansal-3370351bb/" target="_blank" className='social'>
            <i style={{marginRight:"10px"}} class="fa-brands fa-linkedin-in"></i>
            </a>
        </div>
    </div>
  )
}

export default Bottom