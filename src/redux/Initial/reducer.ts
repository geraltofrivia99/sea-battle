import { createReducer } from '../../utils/reducerHelper';
import * as TYPES from './types';

interface IFooter {
    footerText: string;
}

const initState: IFooter = {
    footerText: '',
};


const initalAction = (state: IFooter) => ({ ...state });
const setFooterText = (state: IFooter, { text }: { text: string }) => ({
    ...state,
    text,
})


const handlers = {
    [TYPES.INITIAL]: initalAction,
    [TYPES.SET_FOOTER_MESSAGES]: setFooterText,
  };
  
  export const initReducer = createReducer(initState, handlers);
  