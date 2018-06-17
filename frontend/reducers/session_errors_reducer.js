import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, action.errors);
    case RECEIVE_CURRENT_USER:
      return {session: []};
    default:
      return state;
  }
};

export default sessionErrorsReducer;
