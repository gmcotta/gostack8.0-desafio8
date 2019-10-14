import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import NavigationService from './services/navigation';

import store from './store';
import './config/ReactotronConfig';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </Provider>
  );
}
