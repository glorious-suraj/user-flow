import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import AppNavigator from './src/navigation/AppNavigator';

import { appStore, persistor } from './src/redux/store';

const App = () => {
  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
