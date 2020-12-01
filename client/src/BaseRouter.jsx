import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component lazy load
const ProfilePage = React.lazy(() => import('./pages/Profile'));
const HomePage = React.lazy(() => import('./pages/Home'));
const LoginPage = React.lazy(() => import('./pages/Login'));
const RegistrationPage = React.lazy(() => import('./pages/Registration'));

export default function BaseRouter() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <Switch>
      {isAuthenticated ? (
        <>
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route path="/login" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Redirect from="/" to="/login" />
        </>
      )}
    </Switch>
  );
}
