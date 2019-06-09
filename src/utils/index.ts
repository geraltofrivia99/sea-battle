import { number } from "prop-types";

export function createMatrix() {
	var x = 10, y = 10, arr = [];
	for (var i = 0; i < x; i++) {
		arr[i] = [10];
		for(var j = 0; j < y; j++) {
			arr[i][j] = 0;
		}
	}
	return arr;
}

export function getRandom(n: number) {
	// n - максимальное значение, которое хотим получить
	return Math.floor(Math.random() * (n + 1));
}

export function getElement(id: string) {
	return document.getElementById(id);
}

export function getCloneCoords(fakeShip: any, user: any) {
  const { decks, ref } = fakeShip;
  // получаем значения всех координат клона
  let pos	= ref.getBoundingClientRect(),
  // вычисляем разность между координатой стороны клона и
  // координатой соответствующей стороны игрового поля
  left = pos.left - user.fieldY,
  right	= pos.right - user.fieldY,
  top	= pos.top - user.fieldX,
  bottom = pos.bottom - user.fieldX;
  // создаём объект, куда поместим итоговые значения
  const coords: any = {};

  // в результате выполнения условия, убираем неточности позиционирования
  coords.top	= (top < 0) ? 0 : (bottom > user.fieldSide) ? user.fieldSide - user.shipSide : top;
  coords.top	= Math.round(coords.top / user.shipSide) * user.shipSide;
  // получаем значение в координатах матрицы по оси X
  coords.x	= coords.top / user.shipSide;

  coords.left = (left < 0) ? 0 : (right > user.fieldSide) ? user.fieldSide - user.shipSide * decks : left;
  coords.left = Math.round(coords.left / user.shipSide) * user.shipSide;
  coords.y	= coords.left / user.shipSide;
  return coords;
}

export function getCoord(el: any) {
  const coords = el.getBoundingClientRect();
  return {
		left:	coords.left + window.pageXOffset,
		right:	coords.right + window.pageXOffset,
		top:	coords.top + window.pageYOffset,
		bottom: coords.bottom + window.pageYOffset
	}
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

export const initialDraggableShips: IDragableCollections = {
  fourtdeck: {
    isVisible: true,
    decks: 4,
    shipname: 'fourtdeck',
    isDragging: false,
  },
  tripletdeck1: {
    isVisible: true,
    decks: 3,
    shipname: 'tripletdeck1',
    isDragging: false
  },
  tripledeck2: {
    isVisible: true,
    decks: 3,
    shipname: 'tripledeck2',
    isDragging: false
  },
  doubledeck1: {
    isVisible: true,
    decks: 2,
    shipname: 'doubledeck1',
    isDragging: false
  },
  doubledeck2: {
    isVisible: true,
    decks: 2,
    shipname: 'doubledeck2',
    isDragging: false
  },
  doubledeck3: {
    isVisible: true,
    decks: 2,
    shipname: 'doubledeck3',
    isDragging: false
  },
  singledeck1: {
    isVisible: true,
    decks: 1,
    shipname: 'singledeck1',
    isDragging: false
  },
  singledeck2: {
    isVisible: true,
    decks: 1,
    shipname: 'singledeck2',
    isDragging: false
  },
  singledeck3: {
    isVisible: true,
    decks: 1,
    shipname: 'singledeck3',
    isDragging: false
  },
  singledeck4: {
    isVisible: true,
    decks: 1,
    shipname: 'singledeck4',
    isDragging: false
  }
}