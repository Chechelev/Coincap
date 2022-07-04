import React from "react";
import './TableItem.scss';

export function RenderTableItem(props) {
  const tableData = (props.tableCoinList.coinsPagination.data);

  return tableData.map(({ id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr }) => {
    return (
      <tr data-testid="tableItem" key={id} >
        <td data-testid="tableColumn" onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{rank}</span>
        </td>
        <td data-testid="tableColumn" onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{name}</span>
        </td>
        <td data-testid="tableColumn" onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{`${parseFloat(priceUsd).toFixed(3)}$`}</span>
        </td>
        <td onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{`${parseFloat(marketCapUsd / 1000000000).toFixed(2)}$ b.`}</span>
        </td>
        <td onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{`${parseFloat(vwap24Hr).toFixed(2)}$`}</span>
        </td>
        <td onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{`${parseFloat(supply / 1000000).toFixed(2)}m.`}</span>
        </td>
        <td onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{`${parseFloat(volumeUsd24Hr / 1000000).toFixed(2)}m.`}</span>
        </td>
        <td onClick={() => props.onItemSelected(id)}>
          <span style={{ color: `${props.color}` }} to="/details">{`${parseFloat(changePercent24Hr).toFixed(2)}%`}</span>
        </td>
        <td className="crypto-add" onClick={() => props.showModal(id, name, priceUsd)}>
          <i className="fa-solid fa-plus"></i>
        </td>
      </tr>
    );
  })
};
