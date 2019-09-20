
import * as TYPES from './types';

export const initialField = (field: any) => ({
  type: TYPES.INITIAL,
  payload: { field }
});

export const setFooterText = (text: string) => ({
  type: TYPES.SET_FOOTER_MESSAGES,
  payload: { text }
})

export const shipWasSetted = () => ({
  type: TYPES.SHIPS_WAS_SETTED
})

export const startGame = () => ({
  type: TYPES.START_GAME
})