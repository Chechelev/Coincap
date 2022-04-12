export function coinTableHasErrored(state = false, action) {
  switch (action.type) {
    case 'COINTABLE_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function coinTableIsLoading(state = false, action) {
  switch (action.type) {
    case 'COINTABLE_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function coinTable(state = [], action) {
  switch (action.type) {
    case 'COINTABLE_FETCH_DATA_SUCCESS':
      return action.coinTable;

    default:
      return state;
  }
}