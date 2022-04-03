import React from 'react';
import './wallet-modal-window.scss';

import { WalletItems } from '../walletItems/wallet-items';


export const Wallet = ({ handleClose, show }) => {

  const showHideClassName = show ? "modal modal-active" : "modal display-none";

  return (
    <div id="openModal" className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">My Coins</h3>
            <a href="#close" title="Close" className="close" onClick={handleClose}>×</a>
          </div>
          <div className="modal-body">
            <div className="modal-body__titles-wallet">
              <div className="modal-body__titles-wallet-name">Name</div>
              <div className="modal-body__titles-wallet-amount">Amount</div>
              <div className="modal-body__titles-wallet-total-price">Total Sum</div>
            </div>
            <hr></hr>
            <WalletItems />
          </div>
        </div>
      </div>
    </div>
  )
}




