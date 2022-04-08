import React from "react";

export function RenderCoins({ existingEntries, handleDeleteElement }) {

  return existingEntries.map((element, i) => {
    return (
      <div className="modal-body__items">
        <div className="modal-body__item" key={element.id} >
          <div className="modal-body__item-name">{element.name}</div>
          <div className="modal-body__item-amount">{element.amount}</div>
          <div className="modal-body__item-total-price">{`${(element.amount * ((parseInt(element.price * 100)) / 100)).toFixed(2)}`}$</div>
          <div className="crypto-minus" onClick={() => handleDeleteElement(i)}>
            <i className="fa-solid fa-minus"></i>
          </div>
        </div >
      </div>
    );
  });
};