import {useReducer, createContext} from 'react';

import reducer from './reducers';
import initialState from './store';

export const GlobalContext = createContext();

export default function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
