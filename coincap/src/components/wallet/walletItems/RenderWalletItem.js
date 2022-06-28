import React from "react";

export function RenderWalletItem({ existingEntries, handleDeleteElement }) {

  return (
    <div data-testid="renderCoinsTest" className="modal-body__items">
      {
        existingEntries.map((element, i) => (
          <div className="modal-body__item" key={i} >
            <div className="modal-body__item-name">{element.name}</div>
            <div className="modal-body__item-amount">{element.amount}</div>
            <div className="modal-body__item-total-price">{`${(element.amount * ((parseInt(element.price * 100)) / 100)).toFixed(2)}`}$</div>
            <div data-testid="deleteWalletItemTest" className="crypto-minus" onClick={() => handleDeleteElement(i)}>
              <i className="fa-solid fa-minus"></i>
            </div>
          </div >
        ))
      }
    </div>
  )
};