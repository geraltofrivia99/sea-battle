import { createReducer } from '../../utils/reducerHelper';
import { initialDraggableShips, IDragableCollections } from '../../utils';
import * as TYPES from './types';


export interface IInitField {
    field: {
        fieldX: any,
        fieldY: any,
        fieldRight: any,
        fieldBtm: any
    }
}

export interface IState {
    field: IField,
    init: any
}

export interface IField {
    fieldSide: number;
    shipSide: number | null;
    shipsData: [
		'',
		[4, 'fourdeck'],
		[3, 'tripledeck'],
		[2, 'doubledeck'],
		[1, 'singledeck']
	];
    fieldX: number,
    fieldY: number,
    fieldRight: number,
    fieldBtm: number,
    squadron: Object[];
    startGame: boolean;
    matrix: any;
    isDragging: boolean;
    fakeShip: any;
    draggableShipCollection: IDragableCollections;
}

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
    const { x, y } = coord;
    const newMatrix = [...state.matrix]
    newMatrix[x][y] = 1
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


const handlers = {
    [TYPES.INITIAL_FIELD]: initalFieldAction,
    [TYPES.SET_MATRIX]: setMatrix,
    [TYPES.ADD_SHIP]: addShip,
    [TYPES.SET_DECK_IN_MATRIX]: setDeckInMatrix,
    [TYPES.ADD_SHIP_TO_SQUADRON]: addShipToSquadron,
    [TYPES.CLEAR_FIELD]: clearField,
    [TYPES.IS_DRAGGING]: setDragging,
    [TYPES.SET_FAKE_SHIP]: setFakeShip,
    [TYPES.SET_DRAGGABLE_SHIP_COLLECTION]: setDraggableCollection
  };
  
  export const fieldReducer = createReducer(initState, handlers);
  