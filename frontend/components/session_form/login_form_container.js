import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: Object.values(state.errors),
  formType : "Login"
});

const mapDispatchToProp = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProp)(SessionForm);
