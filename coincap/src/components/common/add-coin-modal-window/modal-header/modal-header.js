import React from 'react';

export function ModalHeader({ handleClose }) {

  return (
    <div className="modal-header">
      <h3 className="modal-header__title">Buy Coins</h3>
      <a className="close" onClick={handleClose}>×</a>
    </div>
  );
};
