import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const FormStyles = styled.form`
  width: 100%;
  .formGroup {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <FormStyles>
      <Fade right>
        <div className="formGroup">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="formGroup">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" email="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="formGroup">
          <label htmlFor="message">Your Message</label>
          <textarea type="text" id="message" message="message" value={message} onChange={e => setMessage(e.target.value)}/>
        </div>
        <button type="submit">Send</button>
      </Fade>
    </FormStyles>
  )
}
