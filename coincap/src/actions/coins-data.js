import { itemsFetchDataSuccess, itemsIsLoading, itemsHasErrored } from "./actions";

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