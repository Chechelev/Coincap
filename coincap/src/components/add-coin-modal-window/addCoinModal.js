import React from 'react';

import './addCoinModal.scss'
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal modal-active" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Buy Coins</h3>
            <a href="#close" title="Close" className="close" onClick={handleClose}>×</a>
          </div>
          <div className="modal-body">
            <div className="modal-body__titles">
              <div className="modal-body__titles-name">Name</div>
              <div className="modal-body__titles-amount">Amount</div>
              <div className="modal-body__titles-total-price">Total Sum</div>
            </div>
            <hr></hr>
            <div className="modal-body__item">
              <div className="modal-body__item-name">{children[0]}</div>
              <input type="number" min="0.000001" className="modal-body__item-amount" required></input>
              <div className="modal-body__item-total-price">${children[0]}</div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-footer__btn-container">
              <button className="modal-footer__btn" type="submit">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal
