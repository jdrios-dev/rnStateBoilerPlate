import React, {createContext} from 'react';
import { useReducer } from 'react';
import { TestAction, testReducer } from './TestReducer';

// 1. type my state
export interface TestState {
  isLogged: boolean;
  name?: string;
  color?: string;
}

// 2. Initial State
export const testInitialState: TestState = {
  isLogged: false,
  name: 'No name yet',
  color: 'red',
};
// 3. Create context
export interface TestContextProps {
  testState: TestState;
  changeName: () => void;
}

export const TestContext = createContext({} as TestContextProps);

// 4. Provider Component from the state
export const TestProvider = ({children}: any) => {
  
  const [testState, dispatch] = useReducer(testReducer, testInitialState)
  const changeName = (type: TestAction) => {
    dispatch({type: type})
  }
  return <TestContext.Provider
    value={{
      testState,
      changeName
    }}
  >{children}</TestContext.Provider>;
};
