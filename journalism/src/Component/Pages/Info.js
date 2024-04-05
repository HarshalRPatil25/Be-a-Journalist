import React from 'react'
import Logo from './Mr.Arun.png'
import '../CSS/Info.css'
import { Link } from 'react-router-dom'
import Btn from './btn'

function Info() {
  return (
    <div>
        <div className='Container'>
          <div className='Arun_Info'>
            <div className='Info'>
              <h3>Welcome Aspiring Journalists </h3>
              <h6><pre>Step into the world of journalism with confidence and expertise
                                                                <br/>
                                                                
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;             ~ By Mr.Arun</pre></h6>
              <p><pre>Are you ready to embark on a journey <br></br>
                that will shape the future of your journalism career?</pre></p>
                <Link to="/course"><Btn/></Link>
            </div>
            <div className='info_Logo'>
                <img className="img" src={Logo} alt='logo' />
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Info