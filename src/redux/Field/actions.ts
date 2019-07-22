
import * as TYPES from './types';
// import { IdraggbleShip } from '../../utils';

export const initialField = (field: any) => ({
  type: TYPES.INITIAL_FIELD,
  payload: { field }
});

export const initialFieldStart = (el: any) => ({
  type: TYPES.INITIAL_FIELD_START,
  payload: { el }
});

export const randomLocationShip = (field: string) => ({
  type: TYPES.RANDOM_LOC_SHIP_START,
  payload: { field }
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

export const removeDeckFromMatrix = (coord: any) => ({
  type: TYPES.REMOVE_DECK_FROM_MATRIX,
  payload: { coord }
})

export const addToSquadron = (ship: any) => ({
  type: TYPES.ADD_SHIP_TO_SQUADRON,
  payload: { ship }
})

export const updateSquadron = (squadron: any) => ({
  type: TYPES.UPDATE_SQUADRON,
  payload: { squadron }
})

export const clearField = () => ({
  type: TYPES.CLEAR_FIELD
})

export const setDragging = (isDrag: boolean) => ({
  type: TYPES.IS_DRAGGING,
  payload: { isDrag }
})

export const setFakeShip = (fakeShip: any) => ({
  type: TYPES.SET_FAKE_SHIP,
  payload: { fakeShip }
})

export const addSingleShipStart = (ship: any) => ({
  type: TYPES.ADD_SINGLE_SHIP_START,
  payload: { ship }
})

export const setDraggableShipCollection = (ship: any) => ({
  type: TYPES.SET_DRAGGABLE_SHIP_COLLECTION,
  payload: { ship }
})

export const changeShipDirection = (ship: any) => ({
  type: TYPES.CHANGE_SHIP_DIRECTION,
  payload: { ship }
})

export const startGameWithRandomShips = (ship: any) => ({
  type: TYPES.START_GAME_WITH_RANDOM_SHIPS,
})