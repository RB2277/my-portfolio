import { useState } from 'react';

function Contact() {

 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setComments(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !name) {
      setErrorMessage('Email and name fields are required!');
      return;
    }
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
     <div className="container text-center">
      <h1>Looking to get in touch? Fill out the form below!</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group">
        <input
        className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div className="form-group">
        <input
          className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        <div className="form-group">
        <input
          className="form-control"
          value={comments}
          name="comments"
          onChange={handleInputChange}
          type="text"
          placeholder="comments"
        />
        </div>
        <button type="submit" className="btn btn-primary" id='contactBtn'>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default Contact
