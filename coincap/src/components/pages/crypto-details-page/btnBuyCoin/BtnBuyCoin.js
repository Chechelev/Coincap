import React from 'react';
import PropTypes from 'prop-types';
import './BtnBuyCoin.scss';

export default function BuyBtn({ buyCoin, text = 'buy', state = '', size = '', type = 'button' }) {
  return (
    <div data-testid="cryptoDetailsRightTest" className={`crypto-details__right`}>
      <button data-testid="btnBuyCoin" className={`btn__buy-coin ${state} ${size}`} type={type} onClick={buyCoin}>{text}</button>
    </div>
  );
};

BuyBtn.propTypes = {
  text: PropTypes.node,
  state: PropTypes.oneOf(['primary', 'hover', 'active']),
  size: PropTypes.oneOf(['primary', 'small']),
  type: PropTypes.string,
  buyCoin: PropTypes.func,
}