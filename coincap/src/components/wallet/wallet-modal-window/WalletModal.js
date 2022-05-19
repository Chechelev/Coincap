import React from 'react';
import './WalletModal.scss';

import { WalletModalHeader } from './walletModalHeader/WalletModalHeader';
import { WalletModalBody } from './walletModalBody/WalletModalBody';
import { WalletItems } from '../walletItems/WalletItems';

export const WalletModal = ({ handleClose, show }) => {

  const showHideClassName = show ? "modal modal-active" : "modal display-none";

  return (
    <div data-testid="modalTest" id="openModal" className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <WalletModalHeader handleClose={handleClose} />
          <WalletModalBody />
          <WalletItems />
        </div>
      </div>
    </div>
  );
};




