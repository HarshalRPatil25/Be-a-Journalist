import React, { useState } from 'react';
import '../CSS/ContactUs.css';
function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!name || !email || !query) {
      alert('Please fill in all the fields.');
      return;
    }

   
    alert('Your message is sent');
    
   
    setName('');
    setEmail('');
    setQuery('');
  };

  return (
    <div>
      <div className='cnt'>
        <div className='cnt1'>
          <form onSubmit={handleSubmit}>
            <div className='name'>
              <label htmlFor='name'>Name</label>
              <div className='int1'>
                <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <div className='int2'>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className='query'>
              <label htmlFor='query'>Message</label>
              <div className='int3'>
                <textarea id='query' name='query' value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>
            </div>
            <div className='query'>
              <div className='int3'>
                <button className='btn2' type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
