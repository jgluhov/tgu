import React from 'react';
import { IEnrollee } from '@/interfaces/enrollee.interface';
import { IPersonalCurriculum } from '@/interfaces/personal-curriculum.interface';

type Action = { type: string, payload?: any };
type Dispatch = (action: Action) => void
type State = {enrollee: IEnrollee, curriculum: IPersonalCurriculum};

const StoreContext = React.createContext<{state: State; dispatch: Dispatch}>(null);

const initialState: State = {
  enrollee: null,
  curriculum: null
}

function storeReducer(state: State, action: Action) {
  switch (action.type) {
    case 'set-enrollee': {
      return {...state, enrollee: action.payload}
    }
    case 'set-curriculum': {
      return {...state, curriculum: action.payload}
    }
    default: return state;
  }
}

export interface IProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = (props: IProviderProps) => {
  const [state, dispatch] = React.useReducer(storeReducer, initialState)
  const value = {state, dispatch};
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  const context = React.useContext(StoreContext)
  return context;
}
