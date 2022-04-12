import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './coins';
import { coin, coinHasErrored, coinIsLoading } from './coin-detail';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,

  coin,
  coinHasErrored,
  coinIsLoading
});