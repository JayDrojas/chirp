import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, first_name, last_name));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='login-form-div'>
        <div className='login-form-div-content'>
          <input
            className="input_login"
            placeholder='UserName'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
      </div>
      <div className='login-form-div'>
        <input
          className="input_login"
          placeholder='First Name'
          type='text'
          name='first_name'
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
        ></input>
      </div>
      <div className='login-form-div'>
        <input
          className="input_login"
          placeholder='Last Name'
          type='text'
          name='last_name'
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
        ></input>
      </div>
      <div className='login-form-div'>
        <input
          className="input_login"
          placeholder='Email'
          type='text'
          name='Email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='login-form-div'>
        <input
          className="input_login"
          placeholder='Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='login-form-div'>
        <input
          className="input_login"
          placeholder='Repeat Password'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div id="signup-form" className='submit-bttn-div' onClick={onSignUp}>
        <span type='submit'>Sign Up</span>
      </div>
    </form>
  );
};

export default SignUpForm;
