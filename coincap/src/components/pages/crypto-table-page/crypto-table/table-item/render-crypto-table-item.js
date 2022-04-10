import React from "react";
import { Link } from 'react-router-dom';


export function RenderTableItem(props) {
  let data = Array.from(props.tableCoinList)

  return data.map(({ id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr }) => {
    return (
      <tr key={id} onClick={() => props.onItemSelected(id)}>
        <td>
          <Link to="/details">{rank}</Link>
        </td>
        <td>
          <Link to="/details">{name}</Link>
        </td>
        <td>
          <Link to="/details">{`${parseFloat(priceUsd).toFixed(3)}$`}</Link>
        </td>
        <td>
          <Link to="/details"> {`${parseFloat(marketCapUsd / 1000000000).toFixed(2)}$ b.`}</Link>
        </td>
        <td>
          <Link to="/details">{`${parseFloat(vwap24Hr).toFixed(2)}$`}</Link>
        </td>
        <td>
          <Link to="/details">  {`${parseFloat(supply / 1000000).toFixed(2)}m.`}</Link>
        </td>
        <td>
          <Link to="/details">  {`${parseFloat(volumeUsd24Hr / 1000000).toFixed(2)}m.`}</Link>
        </td>
        <td>
          <Link to="/details"> {`${parseFloat(changePercent24Hr).toFixed(2)}%`}</Link>
        </td>
        <td className="crypto-add" onClick={() => props.showModal(id, name, priceUsd)}>
          <i className="fa-solid fa-plus"></i>
        </td>
      </tr>
    );
  });
};
