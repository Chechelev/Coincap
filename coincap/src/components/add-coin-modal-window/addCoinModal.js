import { render } from 'node-sass';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './addCoinModal.scss';

export class Modal extends Component {
  render() {
    return (
      <div id="openModal" className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Buy Coins</h3>
              <a href="#close" title="Close" className="close">×</a>
            </div>
            <div className="modal-body">
              <div className="modal-body__titles">
                <div className="modal-body__titles-name">Name</div>
                <div className="modal-body__titles-amount">Amount</div>
                <div className="modal-body__titles-total-price">Total Sum</div>
              </div>
              <hr></hr>
              <div className="modal-body__item">
                <div className="modal-body__item-name">bvz</div>
                <input className="modal-body__item-amount" value=''></input>
                <div className="modal-body__item-total-price">$123.123</div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="modal-footer__btn-container">
                <button className="modal-footer__btn" type="submit">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

