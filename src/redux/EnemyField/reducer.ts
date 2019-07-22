import { createReducer } from '../../utils/reducerHelper';
import { IField, IEnemyField, IInitField, IState } from '../../types';
import { SET_MATRIX } from '../Field/types';
import * as TYPES from './types';

const initState: IEnemyField = {
  fieldSide: 330,
  shipSide: 33,
  fieldX: 0,
  fieldY: 0,
  fieldRight: 0,
  fieldBtm: 0,
  squadron: [],
  cells: [],
  enemyMatrix: null,
};

const initialEnemyField = (state: IEnemyField, { field }: IInitField) => ({
  ...state,
  fieldX: field.fieldX,
  fieldY: field.fieldY,
  fieldRight: field.fieldRight,
  fieldBtm: field.fieldBtm
})

const setEnemyMatrix = (state: IEnemyField, { matrix }: any) => ({
  ...state,
  enemyMatrix: matrix
});

const addShipToSquadron = (state: IEnemyField, { ship }: any) => ({
  ...state,
  squadron: [...state.squadron, ship]
})

const setDeckInEnemyMatrix = (state: IEnemyField, { coord }: any) => {
  const { x, y, iconNumber } = coord;
  const newMatrix = [...state.enemyMatrix];
  newMatrix[x][y] = iconNumber;
  return {
      ...state,
      enemyMatrix: newMatrix
  }
}

const addElemtToCell = (state: IEnemyField, { el }: any) => ({
  ...state,
  cells: [...state.cells, el]
})

const updateSquadron = (state: IField, { squadron }: any) => ({
  ...state,
  squadron,
})

const updateCells = (state: IField, { cells }: any) => ({
  ...state,
  cells,
})

const handlers = {
  [TYPES.SET_ENEMY_MATRIX]: setEnemyMatrix,
  [TYPES.ADD_SHIP_TO_ENEMY_SQUADRON]: addShipToSquadron,
  [TYPES.SET_DECK_IN_ENEMY_MATRIX]: setDeckInEnemyMatrix,
  [TYPES.INITIAL_ENEMY_FIELD]: initialEnemyField,
  [TYPES.ADD_ELEMENT_TO_CELL]: addElemtToCell,
  [TYPES.UPDATE_ENEMY_SQUADRON]: updateSquadron,
  [TYPES.UPDATE_ENEMY_CELLS]: updateCells,
};

export const enemyfieldReducer = createReducer(initState, handlers);