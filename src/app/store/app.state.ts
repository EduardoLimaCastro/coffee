import { createReducer } from "@ngrx/store";

export interface IAppState {
  drink: string;
  type: string;
  grind: string;
  much: string;
  period: string;
}

export const appInitialState: IAppState = {
  drink:'Filter',
  type:'',
  grind:'',
  much:'',
  period:''
}

export const appReducer = createReducer(
  appInitialState
)

