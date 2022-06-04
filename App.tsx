import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation/TabNav';
import {TestProvider} from './src/context/TestContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MyTabs />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: { children: JSX.Element }) => {
  return <TestProvider>{children}</TestProvider>;
};

export default App;
