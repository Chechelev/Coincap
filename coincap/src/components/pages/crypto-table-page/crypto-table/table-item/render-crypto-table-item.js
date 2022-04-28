import React from "react";
import { Link } from 'react-router-dom';
import { Spinner } from "../../../../common/spinner/spinner";
import { MemoryRouter as Router } from 'react-router-dom';
import { LinkTo } from "@storybook/addon-links";


export function RenderTableItem(props) {
  let data = Array.from(props.tableCoinList);

  if (!data) {
    return <Spinner></Spinner>;
  }
  else {
    return data.map(({ id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr }) => {
      return (
        //  <Router>
        <tr data-testid="tableItem" key={id} onClick={() => props.onItemSelected(id)}>
          <td data-testid="tableColumn">
            <Link style={{ color: `${props.color}` }} to="/details">{rank}</Link>
          </td>
          <td data-testid="tableColumn">
            <Link style={{ color: `${props.color}` }} to="/details">{name}</Link>
          </td>
          <td data-testid="tableColumn">
            <Link style={{ color: `${props.color}` }} to="/details">{`${parseFloat(priceUsd).toFixed(3)}$`}</Link>
          </td>
          <td>
            <Link style={{ color: `${props.color}` }} to="/details">{`${parseFloat(marketCapUsd / 1000000000).toFixed(2)}$ b.`}</Link>
          </td>
          <td>
            <Link style={{ color: `${props.color}` }} to="/details">{`${parseFloat(vwap24Hr).toFixed(2)}$`}</Link>
          </td>
          <td>
            <Link style={{ color: `${props.color}` }} to="/details">{`${parseFloat(supply / 1000000).toFixed(2)}m.`}</Link>
          </td>
          <td>
            <Link style={{ color: `${props.color}` }} to="/details">{`${parseFloat(volumeUsd24Hr / 1000000).toFixed(2)}m.`}</Link>
          </td>
          <td>
            <Link style={{ color: `${props.color}` }} to="/details">{`${parseFloat(changePercent24Hr).toFixed(2)}%`}</Link>
          </td>
          <td className="crypto-add" onClick={() => props.showModal(id, name, priceUsd)}>
            <i className="fa-solid fa-plus"></i>
          </td>
        </tr>
        //  </Router>
      );
    }
    )
  };
};
