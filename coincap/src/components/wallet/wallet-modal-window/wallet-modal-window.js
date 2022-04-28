import React from 'react';
import './wallet-modal-window.scss';

import { WalletModalHeader } from './wallet-modal-header/wallet-modal-header';
import { WalletModalBody } from './wallet-modal-body/wallet-modal-body';
import { WalletItems } from '../wallet-items/wallet-items';

export const Wallet = ({ handleClose, show }) => {

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




