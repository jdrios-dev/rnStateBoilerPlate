import {TestState} from './TestContext';

export type TestAction =
  | {type: 'changeName'}
  | {
      type: 'resetAll';
      payload: string;
    };

export const testReducer = (
  state: TestState,
  action: TestAction,
): TestState => {
  switch (action.type) {
    case 'changeName':
      return {
        ...state,
        isLogged: true,
        name: 'Juan Daniel',
        color: 'blue',
      };
    case 'resetAll':
      return {
        ...state,
        isLogged: true,
        name: 'Not name again',
        color: 'yellow',
      };

    default:
      return state;
  }

  return state;
};
