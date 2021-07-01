import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

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
