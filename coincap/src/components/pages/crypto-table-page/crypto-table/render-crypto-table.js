import React from "react";
import './crypto-table.scss';

import { Spinner } from "../../../common/spinner/spinner";
import ReactPaginate from 'react-paginate';
import Modal from "../../../common/add-coin-modal-window/addCoinModal";
import { TableHeader } from "./table-header/table-header";
import { RenderTableItem } from "./table-item/render-crypto-table-item";

export function RenderCryptoTable(props) {

  if (!props) {
    return <Spinner />;
  }

  return (
    <>
      <ReactPaginate
        nextLabel=""
        onPageChange={props.handlePageClick}
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
          <TableHeader />
          <tbody>
            <RenderTableItem
              tableCoinList={props.tableCoinList}
              showModal={props.showModal}
              onItemSelected={props.onItemSelected}>
            </RenderTableItem>
          </tbody>
        </table>
      </div>

      <Modal
        show={props.show}
        warning={props.warning}
        handleClose={props.handleClose}
        handleSubmit={props.submitModal}>
        {[props.selectedCoinName, props.selectedCoinPrice]}
      </Modal>
    </>
  );
};