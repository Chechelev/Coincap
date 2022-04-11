
const initialState = {
  crypto: [],
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CRYPTO_LOADED':
      return {
        ...state,
        loading: false,
        error: null,
        crypto: [...state.crypto, action.payload]
      };
    default:
      return state;
  }
};