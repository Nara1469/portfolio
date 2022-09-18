import React, { useState } from 'react';
import Icons from './Icons';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Declaring state variables for Inputs using `useState`
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case 'userName':
        setUserName(inputValue);
        break;
      case 'email':
        setEmail(inputValue);
        break;
      case 'message':
        setMessage(inputValue);
        break;
      default:
        break;
    }

    return;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!userName) {
      setErrorMessage('Name is required');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!message) {
      setErrorMessage(`Message is required`);
      return;
    }
    // Alert the user, clear the inputs
    alert(`Hello ${userName}`);
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h3 className='text-center text-color'>Contact Me</h3>
      <form className='form'>
        <input
          value={userName}
          name='userName'
          onChange={handleInputChange}
          type='text'
          placeholder='Name'
        />
        <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='text'
          placeholder='Email'
        />
        <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Message'
        />
        <div className='text-center'>
          <button className='submit-button' onClick={handleFormSubmit}>
            SUBMIT
          </button>
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
      </form>
      <Icons />
    </div>
  );
}

export default Form;