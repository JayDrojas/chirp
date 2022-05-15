import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form id='login-form'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='login-form-div'>
        <div className='login-form-div-content'>
          <label className='login_label' htmlFor='email'>Email</label>
          <input
          className="input_login"
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
      </div>
      <div className='login-form-div'>
        <div className='login-form-div-content'>
          <label className='login_label' htmlFor='password'>Password</label>
          <input
          className="input_login"
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
      </div>
        <div className='login-form-div login-form-div-bttn-cont'>
          <div className='submit-bttn-div' onClick={onLogin}>
          <span className='submit-bttn-form'>Log in</span>
          </div>
           {/* <button type='submit'>Login</button> */}
        </div>
    </form>
  );
};

export default LoginForm;
