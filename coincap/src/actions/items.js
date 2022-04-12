import {
  itemsFetchDataSuccess,
  itemsIsLoading,
  itemsHasErrored,
  coinFetchDataSuccess,
  coinIsLoading,
  coinHasErrored,
  coinTableFetchDataSuccess,
  coinTableIsLoading,
  coinTableHasErrored
}
  from './actions';


export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items.data)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function coinFetchData(url) {
  return (dispatch) => {
    dispatch(coinIsLoading(true));

    fetch(`https://api.coincap.io/v2/assets/${url}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(coinIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((coin) => dispatch(coinFetchDataSuccess(coin.data)))
      .catch(() => dispatch(coinHasErrored(true)));
  };
}

export function coinsPerPageFetchData(url) {
  return (dispatch) => {
    dispatch(coinTableIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(coinTableIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((coinTable) => dispatch(coinTableFetchDataSuccess(coinTable)))
      .catch(() => dispatch(coinTableHasErrored(true)));
  };
}