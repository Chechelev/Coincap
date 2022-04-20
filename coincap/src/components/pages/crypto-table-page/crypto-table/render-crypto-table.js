import React from "react";
import './crypto-table.scss';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Modal from "../../../common/add-coin-modal-window/addCoinModal";
import { TableHeader } from "./table-header/table-header";
import { RenderTableItem } from "./table-item/render-crypto-table-item";

export function RenderCryptoTable(props) {
  return (
    <>
      <ReactPaginate className={`pagination ${props.pagination}`}
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
          <TableHeader state={props.size} />
          <tbody>
            <RenderTableItem
              tableCoinList={props.tableCoinList}
              showModal={props.showModal}
              onItemSelected={props.onItemSelected}
              color={props.color}>
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

RenderCryptoTable.propTypes = {
  tableCoinList: PropTypes.object,
  color: PropTypes.string,
  pagination: PropTypes.bool,
};