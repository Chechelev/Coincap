import React from "react";

export function WalletModalHeader({ handleClose }) {
  return (
    <div className="modal-header">
      <h3 className="modal-header__title">My Coins</h3>
      <a className="close" onClick={handleClose}>×</a>
    </div>
  );
};