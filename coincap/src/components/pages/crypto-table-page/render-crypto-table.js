import React from "react";
import { Spinner } from "../../common/spinner/spinner";

export function RenderCryptoTable(props) {
  console.log(props)
  if (!props.tableCoinList) {
    return <Spinner />;
  };

  return (
    <>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageCount={5}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'>
      </ReactPaginate>

      <div className="container">
        <table>
          <thead>
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
          <tbody>
            <RenderTableItem
              tableCoinList={props.tableCoinList}
              showModal={props.showModalshowModal}
              onItemSelected={props.onItemSelected}>
            </RenderTableItem>
          </tbody>
        </table>
      </div>
      <Modal show={show} warning={warning} handleClose={handleClose} handleSubmit={submitModal}>{[selectedCoinName, selectedCoinPrice]}</Modal>
    </>
  )
}