import React from 'react';
import { useState } from 'react';

export function ModalBody({ children, warning }) {
  const warningClassName = warning ? "modal-body__item-amount-warning" : "modal-body__item-amount";
  const [count, setCount] = useState();
  localStorage.setItem('submit', count);

  return (
    <div className="modal-body">
      <div className="modal-body__titles">
        <div className="modal-body__titles-name">Name</div>
        <div className="modal-body__titles-amount">Amount</div>
        <div className="modal-body__titles-total-price">Total Sum</div>
      </div>
      <hr></hr>
      <div className="modal-body__item">
        <div data-testid="modalBodyItemNameTest" className="modal-body__item-name">{children[0]}</div>
        <input
          className={warningClassName}
          data-testid="modalInputTest"
          type="number"
          min="0.000001"
          max="1000"
          step="0.1"
          value={count}
          required
          onChange={(event) => setCount(event.target.value)}>
        </input>
        <div data-testid="modalBodyPriceTest" className="modal-body__item-total-price">{`${((parseInt(children[1] * 100) / 100) * count).toFixed(2)}$`}</div>
      </div>
    </div >
  );
};