import { createReducer } from '../../utils/reducerHelper';
import * as TYPES from './types';
import { setOpponent } from './actions';

interface IFooter {
    footerText: string;
    isGameStarted: boolean;
    isShipsOnBoard: boolean;
    opponent: number;
}

const initState: IFooter = {
    footerText: '',
    isGameStarted: false,
    isShipsOnBoard: false,
    opponent: 0,
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

const startOpponent = (state: IFooter, { opponent }: any) => ({
    ...state,
    opponent,
})


const handlers = {
    [TYPES.INITIAL]: initalAction,
    [TYPES.SET_FOOTER_MESSAGES]: setFooterText,
    [TYPES.SHIPS_WAS_SETTED]: shipsWasSetted,
    [TYPES.START_GAME]: startGame,
    [TYPES.SET_OPPONENT]: setOpponent,
  };
  
  export const initReducer = createReducer(initState, handlers);
  