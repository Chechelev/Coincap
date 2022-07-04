import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";

import './index.scss';
import App from './components/app/App';

const client = new ApolloClient({
  uri: 'https://62bafc8a888da0086552289a--storied-hotteok-6a4a08.netlify.app/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);