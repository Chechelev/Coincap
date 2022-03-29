import React from 'react';
import './wallet-modal-window.scss';

export const Wallet = () => {
  //const { showModal } = this.props;
  // const clazz = showModal ? '.modal' : 'maodal:target';
  return (
    <div id="openModal" className=".modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">My Coins</h3>
            <a href="#close" title="Close" className="close">×</a>
          </div>
          <div className="modal-body">
            <div className="modal-body__titles">
              <div className="modal-body__titles-name">Name</div>
              <div className="modal-body__titles-amount">Amount</div>
              <div className="modal-body__titles-total-price">Total Sum</div>
            </div>
            <hr></hr>
            <div className="modal-body__item">
              <div className="modal-body__item-name">Bitcoin</div>
              <div className="modal-body__item-amount">2.5</div>
              <div className="modal-body__item-total-price">$123.123</div>
              <div className="crypto-minus">
                <i className="fa-solid fa-minus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




