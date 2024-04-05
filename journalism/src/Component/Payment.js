import React, { useState } from 'react';

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Payment is done!');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' , fontSize:'25px' }}>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cardNumber" style={{ display: 'block', marginBottom: '5px' }}>Card Number</label>
          <input type="text" id="cardNumber" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="expiry" style={{ display: 'block', marginBottom: '5px' }}>Expiry</label>
          <input type="text" id="expiry" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} value={expiry} onChange={(e) => setExpiry(e.target.value)} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cvv" style={{ display: 'block', marginBottom: '5px' }}>CVV</label>
          <input type="password" id="cvv" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name on Card</label>
          <input type="text" id="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', width: '100%', fontSize: '16px' }}>Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
