import { createReducer } from '../../utils/reducerHelper';
import * as TYPES from './types';


interface IInitField {
    field: {
        fieldX: any,
        fieldY: any,
        fieldRight: any,
        fieldBtm: any
    }
}

export interface IState {
    fieldSide: any;
    shipSide: number | null;
    shipsData: any;
    field: any;
    fieldX: any;
    fieldY: any;
    fieldRight: any;
    fieldBtm: any;
    squadron: Object[];
    startGame: boolean;
    matrix: any;
}

const initState: IState = {
    fieldSide: 330,
    shipSide: 33,
    shipsData: [
		'',
		[4, 'fourdeck'],
		[3, 'tripledeck'],
		[2, 'doubledeck'],
		[1, 'singledeck']
	],
    field: null,
    fieldX: null,
    fieldY: null,
    fieldRight: null,
    fieldBtm: null,
    squadron: [],
    startGame: false,
    matrix: null,
};


const initalFieldAction = (state: IState, { field }: IInitField) => ({
    ...state,
    fieldX: field.fieldX,
    fieldY: field.fieldY,
    fieldRight: field.fieldRight,
    fieldBtm: field.fieldBtm
});

const setMatrix = (state: IState, { matrix }: any) => ({
    ...state,
    matrix
});
const addShip = (state: IState, { ship }: any) => ({
    ...state,
    squadron: [...state.squadron, ship]
})
const setDeckInMatrix = (state: IState, { coord }: any) => {
    const { x, y } = coord;
    const newMatrix = [...state.matrix]
    newMatrix[x][y] = 1
    return {
        ...state,
        matrix: newMatrix
    }
}
const addShipToSquadron = (state: IState, { ship }: any) => ({
    ...state,
    squadron: [...state.squadron, ship]
})


const handlers = {
    [TYPES.INITIAL_FIELD]: initalFieldAction,
    [TYPES.SET_MATRIX]: setMatrix,
    [TYPES.ADD_SHIP]: addShip,
    [TYPES.SET_DECK_IN_MATRIX]: setDeckInMatrix,
    [TYPES.ADD_SHIP_TO_SQUADRON]: addShipToSquadron
  };
  
  export const fieldReducer = createReducer(initState, handlers);
  