import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ToastProvider>
    </Provider>
  );
};
export default App;
