import * as TYPES from './types';
import { IItemMes } from '../../types';

export const initialField = (field: any) => ({
  type: TYPES.INITIAL,
  payload: { field }
});

export const setFooterText = (itemMessage: IItemMes) => ({
  type: TYPES.SET_FOOTER_MESSAGES,
  payload: { itemMessage }
})

export const shipWasSetted = () => ({
  type: TYPES.SHIPS_WAS_SETTED
})

export const startGame = () => ({
  type: TYPES.START_GAME
})

export const setOpponent = (opponent: number) => ({
  type: TYPES.SET_OPPONENT,
  payload: { opponent }
})