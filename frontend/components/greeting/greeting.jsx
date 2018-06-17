import React from 'react';
import {Link} from 'react-router-dom';
import { Route, Redirect } from 'react-router';
const Greeting = ({user, logout}) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </nav>
  );

  const personalGreeting = () => (
    <div>
      <h1> Hi {user.username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return user ? personalGreeting() : sessionLinks();
};

export default Greeting;
