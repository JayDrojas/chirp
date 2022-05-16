import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Home from './components/Home'
import SplashPage from './components/SplashPage';
import Tweet from './components/Tweets/Tweet';
import TweetsDetail from './components/Home/tweets-detail';

function App() {
  const [loaded, setLoaded] = useState(false);
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  // { user ? <Redirect to="/main" /> : <LoginForm />}
  return (
    <BrowserRouter>
      {/* {user ? <NavBar /> : <></>} */}
      <Switch>
        <Route path='/' exact={true}>
          { user ? <Redirect to="/home" /> : <SplashPage />}
        </Route>
        <ProtectedRoute path='/home' exact={true} >
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/chirps/:chirpId' exact={true} >
          <TweetsDetail />
          {/* <Tweet /> */}
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
