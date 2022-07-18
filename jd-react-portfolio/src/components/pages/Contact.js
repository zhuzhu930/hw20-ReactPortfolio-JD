import React from 'react';

export default function Contact() {

  const handleClick = () => {
    window.alert(`Your message is saved, I will get back to you ASAP.`);
  };

  return (
    <div className="card">
      <h3>Send me a message: </h3>
      <div className="form">
          <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
      </div>

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Your message: </label>
        <textarea className="form-control" id="messageInput" rows="3"></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </div>  
    </div>)
  }
