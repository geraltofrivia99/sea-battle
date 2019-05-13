
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

export const setDeckInMatrix = (coord: any) => ({
  type: TYPES.SET_DECK_IN_MATRIX,
  payload: { coord }
})

export const addToSquadron = (ship: any) => ({
  type: TYPES.ADD_SHIP_TO_SQUADRON,
  payload: { ship }
})