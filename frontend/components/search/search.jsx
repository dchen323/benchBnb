import React from 'react';
import BenchMap from '../BenchMap/benchmap';
import BenchIndex from '../benches/bench_index';




const Search = props => (
  <div>
    <BenchMap />
    <BenchIndex benches={props.benches} fetchBenches={props.fetchBenches} />
  </div>
);

export default Search;
