import React from "react";
import './TableHeader.scss';

export function TableHeader() {
  return (
    <thead data-testid="tableHeader">
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Price</th>
        <th>Marcet Cap</th>
        <th>VWAP (24Hr)</th>
        <th>Supply</th>
        <th>Volume (24Hr)</th>
        <th>Change (24Hr)</th>
        <th></th>
      </tr>
    </thead>
  );
};