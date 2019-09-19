import { createReducer } from '../../utils/reducerHelper';
import { initialDraggableShips } from '../../utils';
import { IField, IInitField } from '../../types';
import * as TYPES from './types';


const initState: IField = {
    fieldSide: 330,
    shipSide: 33,
    shipsData: [
		'',
		[4, 'fourdeck'],
		[3, 'tripledeck'],
		[2, 'doubledeck'],
		[1, 'singledeck']
	],
    fieldX: 0,
    fieldY: 0,
    fieldRight: 0,
    fieldBtm: 0,
    squadron: [],
    cells: [],
    startGame: false,
    matrix: null,
    isDragging: false,
    fakeShip: null,
    draggableShipCollection: initialDraggableShips,
};


const initalFieldAction = (state: IField, { field }: IInitField) => ({
    ...state,
    fieldX: field.fieldX,
    fieldY: field.fieldY,
    fieldRight: field.fieldRight,
    fieldBtm: field.fieldBtm
});

const setMatrix = (state: IField, { matrix }: any) => ({
    ...state,
    matrix
});
const addShip = (state: IField, { ship }: any) => ({
    ...state,
    squadron: [...state.squadron, ship]
})
const setDeckInMatrix = (state: IField, { coord }: any) => {
    const { x, y, iconNumber } = coord;
    const newMatrix = [...state.matrix]
    newMatrix[x][y] = iconNumber
    return {
        ...state,
        matrix: newMatrix
    }
}
const removeDeckFromMatrix = (state: IField, { coord }: any) => {
    const { x, y } = coord;
    const newMatrix = [...state.matrix];
    newMatrix[x][y] = 0;
    return {
        ...state,
        matrix: newMatrix
    }
}
const addShipToSquadron = (state: IField, { ship }: any) => ({
    ...state,
    squadron: [...state.squadron, ship]
})
const clearField = (state: IField) => ({
    ...state,
    squadron: [],
    startGame: false,
    matrix: null,
    isDragging: false,
    fakeShip: null,
})
const setDragging = (state: IField, { isDrag }: any) => ({
    ...state,
    isDragging: isDrag,
})

const setFakeShip = (state: IField, { fakeShip }: any) => ({
    ...state,
    fakeShip,
})

const setDraggableCollection = (state: IField, { ship }: any) => ({
    ...state,
    draggableShipCollection: {
        ...state.draggableShipCollection,
        ...ship
    }
})

const updateSquadron = (state: IField, { squadron }: any) => ({
    ...state,
    squadron,
})

const addElementToCell = (state: IField, { el }: any) => ({
    ...state,
    cells: [...state.cells, el]
  })

const addElementsToCell = (state: IField, { elemts }: any) => ({
...state,
cells: [...state.cells, ...elemts]
})


const handlers = {
    [TYPES.INITIAL_FIELD]: initalFieldAction,
    [TYPES.SET_MATRIX]: setMatrix,
    [TYPES.ADD_SHIP]: addShip,
    [TYPES.SET_DECK_IN_MATRIX]: setDeckInMatrix,
    [TYPES.REMOVE_DECK_FROM_MATRIX]: removeDeckFromMatrix, 
    [TYPES.ADD_SHIP_TO_SQUADRON]: addShipToSquadron,
    [TYPES.CLEAR_FIELD]: clearField,
    [TYPES.IS_DRAGGING]: setDragging,
    [TYPES.SET_FAKE_SHIP]: setFakeShip,
    [TYPES.SET_DRAGGABLE_SHIP_COLLECTION]: setDraggableCollection,
    [TYPES.UPDATE_SQUADRON]: updateSquadron,
    [TYPES.ADD_ELEMENT_TO_USER_CELL]: addElementToCell,
    [TYPES.ADD_ELEMENTS_TO_USER_CELL]: addElementsToCell,
  };
  
  export const fieldReducer = createReducer(initState, handlers);
  