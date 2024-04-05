import React from 'react'
import '../CSS/card.css';
import Icon from './icon.jsx';
import Curriculum from './Course_curriculum.js';
import { Link } from 'react-router-dom';

function card() {
  return (
   <div>
    <div className='both'>




   
    <div className='contain'>
        <div className='course_details'>
            <div className='course_Info'>
              <div className='course_Head'>
                <div className='course_logo'>
                <img className="lgo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUUlEQVR4nO2ZWWgUQRCGv2iixgOJF5qg4AlKVDxBCBiPBy+QIAhiwANEffBCxAsR442ggk8aFd/UeICoIIISjQoSb8QoEvOgCRo0kBg0xmOloALFurM7O8xkSZwfGnanq2uqurv+qu6BEO0Dt4FIEq0eKAEGA0P0d32SOsqCcCTisX3S5nW870hWcQ5wzYy7qs+Cel+gigeacTmt8L5AFbf2uIQIHSFcEcKtFQ9hjBDGCGGMxEMYI4QxQhgj/1WMRBK0JqAC2AcMMM/l937ta0rlwarMw+nOGpyM8RFtd0khugC5wB7gqzGqAditfSLTpjAceAo8AYal2pgQIdoZegPHgC9As7LmFC+KRgGb9YbxLdCoN4UvgSvACqCv//aTBiwFah3ofLIbJZnAMqDcJc//Ai4D03xyYiRQavTfAcYCXYHj+kwm0RFyN3sI+GyUyO+TwHztFye768sK1YHvRv6FrpLIJYtMzTs/VFetroqsTgv6mL5/kA9cB34bgx4CS1wmLdla24D3Zrzs6QPAIJdOzAIqdazYcQLoFUMuT2UqY81Cs3Z+A04BE/CGDGAhcC9q210EpjqMyQbOG/lncYJ5jrkIL4olsB5YB2ThH8YDZ6JqKzGyQPs7AmvMJ4YGYAOQHkNXD6DY6Lml8dKq6AdsB6qNIfeBR+b/hTiX27KSVYattugkpAwZSgI1xoF3wGwH+UzgsIlbqdXGBGmgMMpzNeogMC6BfDfgnBon301iYRLwSmV+KpN1ImB0UIazeeU1sEvjxFJnC7JUTsr76FUrUuMjevhylfj8QpoyzRHgQ5RT1Uqli7Sc7wwsjkGhucBjQ79HPeYiX1coT51qyQtOba3KbzLsVqV5zTfM0HJAtkmdJrhSTXwys24xGtgK3AQ+ataWwF0NDI06Ohcr1foCMfJGgpn8o4YVOPC+m624yhyBhcnm4iMKNTFFdBV2ABM1OKUMmaez1mickpjYqRnaDXKiJuqsQyniCUKJp43yEj0HOKGn7u8KM0aY5hIw04Gp0CCvM8WolDO+otzUWiuTGCcGT9fM3FKvSXsDbARG6ITkx/jW3p8A8EDLbwlMr8jWLRZNv7ZJXbWcNoJ0YIFuzxrdSlIs7g3oJBkiBAHhLwryx2DrCE/uAAAAAElFTkSuQmCC" />
                   
                </div>
                 <div className='courseName'>
                  <h4 className='h4'>Be a Journalist</h4>
                  <h1 className='h1'>New Jornalism Course By Mr.Arun</h1>
                

                 </div>

              </div>
              <div className='course_highlight'>
    <h2 className='h2_1' style={{ display: 'flex', marginBottom: '10px' }}><Icon /><span style={{ marginLeft: '8px' }}>Learn from Expert</span></h2>


    <h2 className='h2' style={{ display: 'flex', marginBottom: '10px' }}><Icon /><span style={{ marginLeft: '8px' }}>Learn Jornalism With-In Two Weeks</span></h2>



    <h2 className='h2' style={{ display: 'flex', marginBottom: '10px' }}><Icon /><span style={{ marginLeft: '8px' }}>Get Practical Insights</span></h2>

    <h2  className='h2' style={{ display: 'flex', marginBottom: '10px' }}><Icon /><span style={{ marginLeft: '8px' }}>Get Real-World Exercises </span></h2>

    <h2 className='h2'  style={{ display: 'flex', marginBottom: '10px' }}><Icon /><span style={{ marginLeft: '8px' }}>Get Personalized Mentorship</span></h2>
    <div className='Submit'>
       <Link to="/payment"><button className='btn1'>Enroll Now</button></Link>
    </div>

    
</div>
     

            </div>
            
        </div>
    </div>
    <div className='ques'>
      <Curriculum className='cc' />
    </div>
    </div>

   </div>
  )
}

export default card