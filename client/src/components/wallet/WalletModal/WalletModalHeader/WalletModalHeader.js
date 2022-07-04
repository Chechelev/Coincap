import React from "react";
import './WalletModalHeader.scss';

export function WalletModalHeader({ handleClose }) {
  return (
    <div data-testid="modalHeaderTest" className="modal-header">
      <h3 className="modal-header__title">My Coins</h3>
      <a data-testid='closeTest' className="close" onClick={handleClose}>×</a>
    </div>
  );
};