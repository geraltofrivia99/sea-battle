export interface IInitField {
  field: {
      fieldX: any,
      fieldY: any,
      fieldRight: any,
      fieldBtm: any
  }
}

export interface IState {
  field: IField;
  init: any,
  enemy: IEnemyField
}

export interface IField {
  fieldSide: number;
  shipSide: number;
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

export interface IdraggbleShip {
  isVisible: boolean;
  decks: number;
  shipname: string;
  isDragging: boolean;
}

export interface IDragableCollections {
  fourtdeck: IdraggbleShip;
  tripletdeck1: IdraggbleShip;
  tripledeck2: IdraggbleShip;
  doubledeck1: IdraggbleShip;
  doubledeck2: IdraggbleShip;
  doubledeck3: IdraggbleShip;
  singledeck1: IdraggbleShip;
  singledeck2: IdraggbleShip;
  singledeck3: IdraggbleShip;
  singledeck4: IdraggbleShip;
}

export interface IEnemyField {
  fieldSide: number;
  shipSide: number;
  squadron: Object[];
  cells: Object[];
  enemyMatrix: any;
  fieldX: number,
  fieldY: number,
  fieldRight: number,
  fieldBtm: number,
}

export interface IFc {
  x: number;
  y: number;
  kx: number;
  ky: number;
  decks?: number;
  shipname?: string;
}
export interface IFieldCoord {
fieldX: number;
fieldY: number;
fieldRight: number;
fieldBtm: number;
}