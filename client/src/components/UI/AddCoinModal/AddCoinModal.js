import React from 'react';
import PropTypes from 'prop-types';
import './AddCoinModal.scss';

import { ModalHeader } from './ModalHeader/ModalHeader';
import { ModalBody } from './ModalBody/ModalBody';
import { ModalFooter } from './ModalFooter/ModalFooter';

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
      <div className="modal__dialog">
        <div className="modal__content">
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
