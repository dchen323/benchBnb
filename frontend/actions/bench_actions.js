import * as APIUtil from '../util/bench_api_util';
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = benches => {
  return({
    type: RECEIVE_BENCHES,
    benches
  });
};

export const fetchBenches = () => dispatch => (
  APIUtil.fetchBenches().then(res => dispatch(receiveBenches(res)))
);
