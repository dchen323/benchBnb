import React from 'react';
import { Link} from 'react-router-dom';

const BenchIndexItem = ({bench}) => (
  <li className="bench-index-item">
    <span>{bench.id}</span>
    <p>{bench.description}</p>
    <span>Latitude: {bench.lat}</span>
    <span>Longitude: {bench.lng}</span>
  </li>
);

export default BenchIndexItem;
