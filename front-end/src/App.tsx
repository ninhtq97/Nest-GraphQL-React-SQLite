import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { client } from './services/api';
import history from './services/history';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </ApolloProvider>
  );
}

export default App;
