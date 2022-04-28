import React from 'react';

export function ModalFooter({ handleSubmit, color }) {
  return (
    <div className="modal-footer">
      <div className="modal-footer__btn-container">
        <button
          style={{ background: `${color}` }}
          data-testid="modalFooterBtnTest "
          className="modal-footer__btn"
          type="submit"
          onClick={handleSubmit}
        >buy</button>
      </div>
    </div>
  )
}