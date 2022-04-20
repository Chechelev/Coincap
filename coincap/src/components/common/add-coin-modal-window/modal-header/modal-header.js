import React from 'react';

export function ModalHeader({ handleClose, color }) {
  console.log(color)
  return (
    <div className="modal-header" style={{ background: `${color}` }}>
      <h3 className="modal-header__title">Buy Coins</h3>
      <a className="close" onClick={handleClose}>×</a>
    </div>
  );
};
