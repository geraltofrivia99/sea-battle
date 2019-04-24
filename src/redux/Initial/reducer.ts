import { createReducer } from '../../utils/reducerHelper';
import * as TYPES from './types';

interface IState {
    name: string;
}

const initState: IState = {
    name: '',
};


const initalAction = (state: IState) => ({ ...state });


const handlers = {
    [TYPES.INITIAL]: initalAction,
  };
  
  export const initReducer = createReducer(initState, handlers);
  