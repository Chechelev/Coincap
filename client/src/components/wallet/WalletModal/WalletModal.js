import React from 'react';
import './WalletModal.scss';

import { WalletModalHeader } from './WalletModalHeader/WalletModalHeader';
import { WalletModalBody } from './WalletModalBody/WalletModalBody';

export const WalletModal = ({ handleClose, show }) => {

  const showHideClassName = show ? "modal modal-active" : "modal display-none";

  return (
    <div data-testid="modalTest" id="openModal" className={showHideClassName}>
      <div className="modal__dialog">
        <div className="modal__content">
          <WalletModalHeader handleClose={handleClose} />
          <WalletModalBody />
        </div>
      </div>
    </div>
  );
};




