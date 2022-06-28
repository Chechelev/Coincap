import React from 'react';
import './WalletModal.scss';

import { WalletModalHeader } from './walletModalHeader/WalletModalHeader';
import { WalletModalBody } from './walletModalBody/WalletModalBody';

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




