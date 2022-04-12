export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  };
}

export function coinHasErrored(bool) {
  return {
    type: 'COIN_HAS_ERRORED',
    hasErrored: bool
  };
}

export function coinIsLoading(bool) {
  return {
    type: 'COIN_IS_LOADING',
    isLoading: bool
  };
}

export function coinFetchDataSuccess(coin) {
  return {
    type: 'COIN_FETCH_DATA_SUCCESS',
    coin
  };
}

export function coinTableHasErrored(bool) {
  return {
    type: 'COINTABLE_HAS_ERRORED',
    hasErrored: bool
  };
}

export function coinTableIsLoading(bool) {
  return {
    type: 'COINTABLE_IS_LOADING',
    isLoading: bool
  };
}

export function coinTableFetchDataSuccess(coinTable) {
  return {
    type: 'COINTABLE_FETCH_DATA_SUCCESS',
    coinTable
  };
}
