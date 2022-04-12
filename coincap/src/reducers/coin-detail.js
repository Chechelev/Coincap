export function coinHasErrored(state = false, action) {
  switch (action.type) {
    case 'COIN_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function coinIsLoading(state = false, action) {
  switch (action.type) {
    case 'COIN_IS_LOADING':
      return action.isLoading;

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