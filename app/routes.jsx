import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import NotesList from './components/containers/NotesList';

export default (
  <div>
    <Route path="/" component={App}>
      <Route path="signin" component={SignInForm} />
      <Route path="signup" component={SignUpForm} />
      <Route path="notelist" component={NotesList} />
    </Route>
  </div>
);