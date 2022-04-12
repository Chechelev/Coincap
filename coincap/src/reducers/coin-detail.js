export function coinHasErrored(state = false, action) {
  switch (action.type) {
    case 'COIN_HAS_ERRORED':
      return action.coinHasErrored;

    default:
      return state;
  }
}

export function coinIsLoading(state = false, action) {
  switch (action.type) {
    case 'COIN_IS_LOADING':
      return action.coinIsLoading;

    default:
      return state;
  }
}

export function coin(state = [], action) {
  switch (action.type) {
    case 'COIN_FETCH_DATA_SUCCESS':
      return action.coin;

    default:
      return state;
  }
}