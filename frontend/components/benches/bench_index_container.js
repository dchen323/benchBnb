import benchIndex from './bench_index';
import {connect} from 'react-redux';
import {fetchBenches} from '../../actions/bench_actions';

const mapStateToProps = state => {

  return ({
    benches: Object.values(state.entities.benches)
  });
};


const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps,mapDispatchToProps)(benchIndex);
