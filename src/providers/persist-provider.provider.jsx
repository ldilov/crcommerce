import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store';

const PersistProvider = ({ children }) => {
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
};

export default PersistProvider;
