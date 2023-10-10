import { createReducer } from "@ngrx/store";

export interface IAppState {
  group: string;
  group1: string;
  group2: string;
  group3: string;
  group4: string;
}

export const appInitialState: IAppState = {
  group:'',
  group1:'',
  group2:'',
  group3:'',
  group4:''
}

export const appReducer = createReducer(
  appInitialState
)

