import React from 'react';
import BenchIndexItem from './bench_index_items';

class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const benchItems = this.props.benches.map(bench => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));

    return (
      <div>
        <ul>
          {benchItems}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
