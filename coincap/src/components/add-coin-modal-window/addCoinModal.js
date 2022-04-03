import React from 'react';
import { useState } from 'react';
import './addCoinModal.scss';

const Modal = ({ handleClose, handleSubmit, show, warning, children }) => {

  const showHideClassName = show ? "modal modal-active" : "modal display-none";
  const warningClassName = warning ? "modal-body__item-amount-warning " : "modal-body__item-amount";
  const [count, setCount] = useState(0);

  localStorage.setItem('submit', count);

  return (
    <div className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Buy Coins</h3>
            <a className="close" onClick={handleClose}>×</a>
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
              <input
                className={warningClassName}
                type="number"
                min="0.000001"
                max="1000"
                step="0.1"
                required
                onChange={(event) => setCount(event.target.value)}
              ></input>
              <div className="modal-body__item-total-price">{`${((parseFloat(children[1])).toFixed(3) * count)}$`}</div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-footer__btn-container">
              <button
                className="modal-footer__btn"
                type="submit"
                onClick={handleSubmit}
              >buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal
