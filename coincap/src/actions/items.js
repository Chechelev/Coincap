import { itemsFetchDataSuccess, itemsIsLoading, itemsHasErrored, coinFetchDataSuccess, coinIsLoading, coinHasErrored } from './actions';

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

    fetch(url)
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