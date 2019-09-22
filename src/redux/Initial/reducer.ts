import { createReducer } from '../../utils/reducerHelper';
import * as TYPES from './types';
import { IItemMes } from '../../types';

interface IFooter {
    footerText: IItemMes;
    isGameStarted: boolean;
    isShipsOnBoard: boolean;
    opponent: number;
}

const initState: IFooter = {
    footerText: {
        isUser: true,
        messages: ''
    },
    isGameStarted: false,
    isShipsOnBoard: false,
    opponent: 0,
};


const initalAction = (state: IFooter) => ({ ...state });
const setFooterText = (state: IFooter, { itemMessage }: { itemMessage: IItemMes }) => ({
    ...state,
    footerText: itemMessage,
})
const shipsWasSetted = (state: IFooter) => ({
    ...state,
    isShipsOnBoard: true
})

const startGame = (state: IFooter) => ({
    ...state,
    isGameStarted: true
})

const setOpponent = (state: IFooter, { opponent }: any) => ({
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
  