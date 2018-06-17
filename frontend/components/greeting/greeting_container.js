import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session, entities: {users} }) => ({
  user: users[session.id]
});


const mapDispatchToProp = dispatch => ({
  logout: () => dispatch(logout())
});



export default(connect(mapStateToProps,mapDispatchToProp)(Greeting));
