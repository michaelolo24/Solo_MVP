import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const SignUpForm = () => {
  return (
    <div>
      <form method="POST" className="sign-up-form">
        <input type="text" name="fullname" placeholder="Full Name" className="sign-up-name" />
        <input type="email" name="email" className="sign-up-email" />
        <input type="password" name="pwd" className="sign-up-pwd" />
        <input type="password" name="confpwd" className="sign-up-confpwd" />
        <button type="submit" className="sign-up-submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignUpForm;