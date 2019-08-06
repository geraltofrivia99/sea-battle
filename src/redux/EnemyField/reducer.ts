import { createReducer } from '../../utils/reducerHelper';
import { IField, IEnemyField, IInitField } from '../../types';
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
  shootMatrix: [],
  shootMatrixAI: [],
  shootMatrixAround: [],
  startPoints: [
    [ [6,0], [2,0], [0,2], [0,6] ],
    [ [3,0], [7,0], [9,2], [9,6] ]
  ],
  tempShip: {
		// количество попаданий в корабль
		totalHits: 0,
		// объекты для хранения координат первого и второго попадания
		// необходимы для вычисления положения корабля
		firstHit: {},
		nextHit: {},
		// значения коэффициентов зависит от положения корабля
		// данные значения используются для вычисления координат
		// обстрела "раненого" корабля
		kx: 0,
		ky: 0
	},
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

const setShootMAtrix = (state: IField, { shootMatrix }: any) => ({
  ...state,
  shootMatrix,
})

const setShootMatrixAI = (state: IField, { shootMatrixAI }: any) => ({
  ...state,
  shootMatrixAI,
})

const setShootMatrixAround = (state: IField, { shootMatrixAround }: any) => ({
  ...state,
  shootMatrixAround,
})

const handlers = {
  [TYPES.SET_ENEMY_MATRIX]: setEnemyMatrix,
  [TYPES.ADD_SHIP_TO_ENEMY_SQUADRON]: addShipToSquadron,
  [TYPES.SET_DECK_IN_ENEMY_MATRIX]: setDeckInEnemyMatrix,
  [TYPES.INITIAL_ENEMY_FIELD]: initialEnemyField,
  [TYPES.ADD_ELEMENT_TO_CELL]: addElemtToCell,
  [TYPES.UPDATE_ENEMY_SQUADRON]: updateSquadron,
  [TYPES.UPDATE_ENEMY_CELLS]: updateCells,
  [TYPES.SET_SHOOT_MATRIX]: setShootMAtrix,
  [TYPES.SET_SHOOT_MATRIX_AI]: setShootMatrixAI,
  [TYPES.SET_SHOOT_MATRIX_AROUND]: setShootMatrixAround,
};

export const enemyfieldReducer = createReducer(initState, handlers);