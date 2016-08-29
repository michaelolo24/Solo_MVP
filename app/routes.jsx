import React from 'react';
import { Route, IndexRoute } from 'react-router';
import  App from './components/app';
import  SignInForm from './components/auth/SignInForm';
import  SignUpForm from './components/auth/SignUpForm';

export default (
  <Route path="/" component={App}>
    <Route path="signin" component={SignInForm} />
    <Route path="signup" component={SignUpForm} />
  </Route>
  <Route path="/notes" component={Notes}>
    <Route path="/note" component={Note} /> {/* Update this to show based on the id of a note*/}
  </Route>
);