import React from 'react';
import './addCoinModal.scss';

import { ModalHeader } from './modal-header/modal-header';
import { ModalBody } from './modal-body/modal-body';
import { ModalFooter } from './modal-footer/modal-footer';

const Modal = ({ handleClose, handleSubmit, show, warning, children }) => {

  const showHideClassName = show ? "modal modal-active" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader handleClose={handleClose} />
          <ModalBody warning={warning} children={children}></ModalBody>
          <ModalFooter handleSubmit={handleSubmit}></ModalFooter>
        </div>
      </div>
    </div>
  )
};

export default Modal;
