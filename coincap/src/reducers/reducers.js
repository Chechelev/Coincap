
const initialState = {
  crypto: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CRYPTO_LOADED':
      return {
        crypto: action.payload
      };
    default:
      return state;
  }
};