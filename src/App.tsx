import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </Provider>
);

export default App;
