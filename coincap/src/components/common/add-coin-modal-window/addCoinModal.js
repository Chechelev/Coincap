import React from 'react';
import PropTypes from 'prop-types';
import './addCoinModal.scss';

import { ModalHeader } from './modal-header/modal-header';
import { ModalBody } from './modal-body/modal-body';
import { ModalFooter } from './modal-footer/modal-footer';

const Modal = ({
  handleClose,
  handleSubmit,
  show = false,
  warning = '',
  children = [],
  color = 'linear-gradient(90deg, rgba(59, 58, 153, 0.957) 18%, rgba(2, 0, 176, 0.957) 53%, rgba(120, 198, 191, 0.81) 100%)' }) => {
  const showHideClassName = show ? "modal modal-active" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader handleClose={handleClose} color={color} />
          <ModalBody warning={warning} children={children}></ModalBody>
          <ModalFooter handleSubmit={handleSubmit} color={color}></ModalFooter>
        </div>
      </div>
    </div>
  )
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.array,
  color: PropTypes.string,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export default Modal;
