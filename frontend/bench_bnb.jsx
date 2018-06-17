import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {fetchBenches} from './actions/bench_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser){
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else{
    store = configureStore();
  }
  // window.signUp = signUp;
  // window.login = login;
  // window.logout = logout;
  // window.fetchBenches = fetchBenches;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
