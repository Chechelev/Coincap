const cryptoLoaded = (newCrypto) => {
  return {
    type: 'CRYPTO_LOADED',
    payload: newCrypto
  };
};

export {
  cryptoLoaded
};