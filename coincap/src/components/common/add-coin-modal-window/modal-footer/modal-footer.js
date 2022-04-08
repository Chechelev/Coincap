import React from 'react';

export function ModalFooter({ handleSubmit }) {
  return (
    <div className="modal-footer">
      <div className="modal-footer__btn-container">
        <button
          className="modal-footer__btn"
          type="submit"
          onClick={handleSubmit}
        >buy</button>
      </div>
    </div>
  )
}