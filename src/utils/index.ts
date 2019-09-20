import { IDragableCollections, IFc, IEnemyField, IOppList } from '../types';

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

export function getShipName(decks: number, length: number) {
	switch(decks) {
		case 4:
			return `fourdeck${length}`;
		case 3:
			return `tripledeck${length}`;
		case 2:
			return `doubledeck${length}`;
		case 1:
			return `singledeck${length}`;
		default:
			return '';
	}
}

export function getCoordinatesDecks(decks: number, matrix: any): IFc {
	// получаем коэффициенты определяющие направление расположения корабля
	// kx === 0 и ky === 1 — корабль расположен горизонтально,
	// kx === 1 и ky === 0 - вертикально.
	var kx = getRandom(1),
		ky = (kx === 0) ? 1 : 0,
		x, y;
 
	// в зависимости от направления расположения, генерируем
	// начальные координаты
	if (kx === 0) {
		x = getRandom(9);
		y = getRandom(10 - decks);
	} else {
		x = getRandom(10 - decks);
		y = getRandom(9);
	}
 
	// проверяем валидность координат всех палуб корабля:
	// нет ли в полученных координатах или соседних клетках ранее
	// созданных кораблей
	const result = checkLocationShip(x, y, kx, ky, decks, matrix);
	// если координаты невалидны, снова запускаем функцию
	if (!result) return getCoordinatesDecks(decks, matrix);
 
	// создаём объект, свойствами которого будут начальные координаты и
	// коэффициенты определяющие направления палуб
	return {
    x: x,
		y: y,
		kx: kx,
		ky: ky
    };
}

export function checkLocationShip (x: number, y: number, kx: number, ky: number, decks: number, matrix: any) {
	// зарегистрируем переменные
  let fromX: number;
  let toX: number = 0;
  let fromY: number;
  let toY: number = 0;

	// формируем индексы начала и конца цикла для строк
	// если координата 'x' равна нулю, то это значит, что палуба расположена в самой верхней строке,
	// т. е. примыкает к верхней границе и началом цикла будет строка с индексом 0
	// в противном случае, нужно начать проверку со строки с индексом на единицу меньшим, чем у
	// исходной, т.е. находящейся выше исходной строки
	fromX = (x === 0) ? x : x - 1;
	// если условие истинно - это значит, что корабль расположен вертикально и его последняя палуба примыкает
	// к нижней границе игрового поля
	// поэтому координата 'x' последней палубы будет индексом конца цикла
	if (x + kx * decks === 10 && kx === 1) toX = x + kx * decks;
	// корабль расположен вертикально и между ним и нижней границей игрового поля есть, как минимум, ещё
	// одна строка, координата этой строки и будет индексом конца цикла
	else if (x + kx * decks < 10 && kx === 1) toX = x + kx * decks + 1;
	// корабль расположен горизонтально вдоль нижней границы игрового поля
	else if (x === 9 && kx === 0) toX = x + 1;
	// корабль расположен горизонтально где-то по середине игрового поля
	else if (x < 9 && kx === 0) toX = x + 2;
 
	// формируем индексы начала и конца цикла для столбцов
	// принцип такой же, как и для строк
	fromY = (y === 0) ? y : y - 1;
	if (y + ky * decks === 10 && ky === 1) toY = y + ky * decks;
	else if (y + ky * decks < 10 && ky === 1) toY = y + ky * decks + 1;
	else if (y === 9 && ky === 0) toY = y + 1;
	else if (y < 9 && ky === 0) toY = y + 2;
 
	// запускаем циклы и проверяем выбранный диапазон ячеек
	// если значение текущей ячейки равно 1 (там есть палуба корабля)
	// возвращаем false 

	for (let i = fromX; i < toX; i++) {
		for (let j = fromY; j < toY; j++) {
			if (matrix[i][j] === 1) return false;
		}
	}
	return true;
}

export const transformCoordinates = ({ pageY, pageX }: any, { fieldX, fieldY, shipSide }: IEnemyField) => ({
	x: Math.trunc((pageY - fieldX) / shipSide),
	y: Math.trunc((pageX - fieldY) / shipSide),
})

export function compareRandom(a: number[], b: number[]) {
	return Math.random() - 0.5;
}

export function checkMaxDecks(squadron: any) {
	var arr = [];
	// перебираем массив оставшихся кораблей эскадры игрока
	for (var i = 0, length = squadron.length; i < length; i++) {
		// записываем в массив кол-во палуб у оставшихся кораблей
		arr.push(squadron[i].decks);
	}
	// возвращаем max значение
	return Math.max.apply(null, arr);
}

export const getEmptyTempShip = () => ({
	totalHits: 0,
	firstHit: {},
	nextHit: {},
	kx: 0,
	ky: 0,
	x0: 0,
	y0: 0,
})
  

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

export const oppList = [
	'Krah an Krait',
	'Emhyr var Emreis',
	'Vernon Roche',
	'Tris Merigold',
	'Yennefer'
]