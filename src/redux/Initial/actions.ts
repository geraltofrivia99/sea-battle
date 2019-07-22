
import * as TYPES from './types';

export const initialField = (field: any) => ({
  type: TYPES.INITIAL,
  payload: { field }
});

export const setFooterText = (text: string) => ({
  type: TYPES.SET_FOOTER_MESSAGES,
  payload: { text }
})