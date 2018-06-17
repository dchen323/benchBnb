import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import BenchContainer from './benches/bench_index_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import {Route} from 'react-router-dom';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
  <AuthRoute path="/login" component={LoginFormContainer} />
  <AuthRoute path="/signup" component={SignupFormContainer} />
  <Route exact path="/" component={ SearchContainer } />
  </div>
);

export default App;
