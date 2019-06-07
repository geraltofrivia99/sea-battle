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