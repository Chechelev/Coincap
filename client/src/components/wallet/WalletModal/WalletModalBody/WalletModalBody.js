import React from "react";
import { WalletItems } from "../../WalletItems/WalletItems";
import './WalletModalBody.scss';

export function WalletModalBody() {
  return (
    <div className="modal-body">
      <div className="modal-body__titles-wallet">
        <div className="modal-body__titles-wallet-name">Name</div>
        <div className="modal-body__titles-wallet-amount">Amount</div>
        <div className="modal-body__titles-wallet-total-price">Total Sum</div>
      </div>
      <hr></hr>
      <WalletItems />
    </div>
  );
};