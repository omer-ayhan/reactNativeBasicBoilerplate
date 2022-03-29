import React from 'react';
import GlobalProvider from './src/infrastructure/context/GlobalProvider';

import MainNavigator from './src/ui/navigators/main.navigator';

export default function App() {
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  );
}
