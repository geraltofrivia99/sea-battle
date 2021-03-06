import * as TYPES from './types';

export const initialEnemyFieldStart = (el: React.SyntheticEvent) => ({
  type: TYPES.INITIAL_ENEMY_FIELD_START,
  payload: { el }
});

export const initialEnemyField = (field: any) => ({
  type: TYPES.INITIAL_ENEMY_FIELD,
  payload: { field }
});

export const addToEnemySquadron = (ship: any) => ({
  type: TYPES.ADD_SHIP_TO_ENEMY_SQUADRON,
  payload: { ship }
});

export const setDeckInEnemyMatrix = (coord: any) => ({
  type: TYPES.SET_DECK_IN_ENEMY_MATRIX,
  payload: { coord }
})

export const setEnemyMatrix = (matrix: any) => ({
  type: TYPES.SET_ENEMY_MATRIX,
  payload: { matrix }
})

export const shoot = (e: React.SyntheticEvent | undefined) => ({
  type: TYPES.SHOOT,
  payload: { e }
})

export const addElementToCell = (el: any) => ({
  type: TYPES.ADD_ELEMENT_TO_CELL,
  payload: { el }
})

export const updateEnemySquadron = (squadron: any) => ({
  type: TYPES.UPDATE_ENEMY_SQUADRON,
  payload: { squadron }
})

export const setBlockedCell = (e: React.SyntheticEvent) => ({
  type: TYPES.SET_BLOCKED_CELL,
  payload: { e }
})

export const updateCells = (cells: any) => ({
  type: TYPES.UPDATE_ENEMY_CELLS,
  payload: { cells }
})

export const enemyShoot = () => ({
  type: TYPES.ENEMY_SHOOT,
})

export const setShootMatrixStart = () => ({
  type: TYPES.SET_SHOOT_MATRIX_START,
})

export const setShootMatrix = (shootMatrix: any) => ({
  type: TYPES.SET_SHOOT_MATRIX,
  payload: { shootMatrix }
})

export const setShootMatrixAI = (shootMatrixAI: any) => ({
  type: TYPES.SET_SHOOT_MATRIX_AI,
  payload: { shootMatrixAI }
})

export const setShootMatrixAround = (shootMatrixAround: any) => ({
  type: TYPES.SET_SHOOT_MATRIX_AROUND,
  payload: { shootMatrixAround }
})

export const updateTempShip = (tempShip: any) => ({
  type: TYPES.UPDATE_TEMP_SHIP,
  payload: { tempShip }
})