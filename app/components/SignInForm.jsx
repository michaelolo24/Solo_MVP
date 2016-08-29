import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const SignInForm = () => {
  return (
    <div>
      <form method="POST" className="sign-in-form">
        <input type="email" name="email" className="sign-in-email" />
        <input type="password" name="pwd" className="sign-in-pwd" />
        <button type="submit" className="sign-in-submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignInForm;