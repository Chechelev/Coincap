import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Portal } from '../portal/portal';
import './addCoinModal.scss';

export const Modal = ({
  active, setactive,
  name, isOpen, onCancel, onSubmit, value
}) => {
  return (
    <>
      {
        isOpen &&
        <div id="openModal" className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Buy Coins</h3>
                <a href="#close" title="Close" className="close" onClick={onCancel}>×</a>
              </div>
              <div className="modal-body">
                <div className="modal-body__titles">
                  <div className="modal-body__titles-name">Name</div>
                  <div className="modal-body__titles-amount">Amount</div>
                  <div className="modal-body__titles-total-price">Total Sum</div>
                </div>
                <hr></hr>
                <div className="modal-body__item">
                  <div className="modal-body__item-name">{name}</div>
                  <input className="modal-body__item-amount" value={value}></input>
                  <div className="modal-body__item-total-price">$123.123</div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-footer__btn-container">
                  <button className="modal-footer__btn" type="submit" onClick={onSubmit}>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

Modal.propTypes = {
  name: propTypes.string,
  isOpen: propTypes.bool,
  onCancel: propTypes.func,
  onSubmit: propTypes.func,
  value: propTypes.string
};

Modal.dafaultProps = {
  name: '',
  isOpen: false,
  onCancel: () => { },
  onSubmit: () => { },
  value: ''
};
