import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Custom providers
import ReduxProvider from './redux-provider.provider';
import PersistProvider from './persist-provider.provider';

const LayeredProvider = ({ children }) => {
  return (
    <React.StrictMode>
      <ReduxProvider>
        <BrowserRouter>
          <PersistProvider>{children}</PersistProvider>
        </BrowserRouter>
      </ReduxProvider>
    </React.StrictMode>
  );
};

export default LayeredProvider;
