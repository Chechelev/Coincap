import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './reducers';
import { coin, coinHasErrored, coinIsLoading } from './coin-detail';
import { coinTable, coinTableHasErrored, coinTableIsLoading } from './coin-table';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,

  coin,
  coinHasErrored,
  coinIsLoading,

  coinTable,
  coinTableHasErrored,
  coinTableIsLoading
});