import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import './index.scss';
import App from './components/app/App';
import { CoincapService } from './services/coincap-service'

/*
const coincapService = new CoincapService()

coincapService.getCoin("bitcoin").then((c) => {
  console.log(c.data.symbol)
});

coincapService.getAllCoins().then((coins) => {

  console.log(coins[0].id)

})
*/

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
