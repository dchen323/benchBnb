import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors),
  formType : "Sign Up"
});

const mapDispatchToProp = (dispatch, ownProps) => ({
  processForm: user => dispatch(signup(user))
});


export default connect(mapStateToProps, mapDispatchToProp)(SessionForm);
