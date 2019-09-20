import { createReducer } from '../../utils/reducerHelper';
import * as TYPES from './types';

interface IFooter {
    footerText: string;
    isGameStarted: boolean;
    isShipsOnBoard: boolean;
}

const initState: IFooter = {
    footerText: '',
    isGameStarted: false,
    isShipsOnBoard: false,
};


const initalAction = (state: IFooter) => ({ ...state });
const setFooterText = (state: IFooter, { text }: { text: string }) => ({
    ...state,
    text,
})
const shipsWasSetted = (state: IFooter) => ({
    ...state,
    isShipsOnBoard: true
})

const startGame = (state: IFooter) => ({
    ...state,
    isGameStarted: true
})


const handlers = {
    [TYPES.INITIAL]: initalAction,
    [TYPES.SET_FOOTER_MESSAGES]: setFooterText,
    [TYPES.SHIPS_WAS_SETTED]: shipsWasSetted,
    [TYPES.START_GAME]: startGame,
  };
  
  export const initReducer = createReducer(initState, handlers);
  