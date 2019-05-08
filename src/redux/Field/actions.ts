
import * as TYPES from './types';

export const initialField = (field: any) => ({
  type: TYPES.INITIAL_FIELD,
  payload: { field }
});

export const randomLocationShip = () => ({
  type: TYPES.RANDOM_LOC_SHIP_START
})

export const setMatrix = (matrix: any) => ({
  type: TYPES.SET_MATRIX,
  payload: { matrix }
})

export const addShip = (ship: any) => ({
  type: TYPES.ADD_SHIP,
  payload: { ship }
}) 