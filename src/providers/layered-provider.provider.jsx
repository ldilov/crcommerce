import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Custom providers
import ReduxProvider from './redux-provider.provider';

const LayeredProvider = ({ children }) => {
  return (
    <React.StrictMode>
      <ReduxProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ReduxProvider>
    </React.StrictMode>
  );
};

export default LayeredProvider;
