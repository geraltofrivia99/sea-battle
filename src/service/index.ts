export const hello = 'hello'
// import { Ships } from './ship';

// export class Field {
//   fieldSide: any;
//   shipSide: number;
//   shipsData: any;
//   field: any;
//   fieldX: any;
//   fieldY: any;
//   fieldRight: any;
//   fieldBtm: any;
//   squadron: any;
//   startGame: boolean;
//   matrix: any;

//   constructor(field: any) {
//     this.fieldSide = 330,
// 	// размер палубы корабля в px
// 	this.shipSide	= 33,
// 	// массив с данными кораблей
// 	// в качестве его элементов выступают массивы содержащие количество палуб и тип кораблей
// 	// индекс элемента массива будет соответствовать количеству кораблей, данные о которых
// 	// содержатся в данном элементе
// 	// чтобы описанная структура была корректной, используем пустой нулевой элемент
// 	this.shipsData	= [
// 		'',
// 		[4, 'fourdeck'],
// 		[3, 'tripledeck'],
// 		[2, 'doubledeck'],
// 		[1, 'singledeck']
// 	],
// 	// объект игрового поля, полученный в качестве аргумента
// 	this.field		= field;
// 	// получаем координаты всех четырёх сторон рамки игрового поля относительно начала
// 	// document, с учётом возможной прокрутки по вертикали 
// 	this.fieldX		= field.getBoundingClientRect().top + pageYOffset;
// 	this.fieldY		= field.getBoundingClientRect().left + pageXOffset;
// 	this.fieldRight	= this.fieldY + this.fieldSide;
// 	this.fieldBtm	= this.fieldX + this.fieldSide;
// 	// создаём пустой массив, куда будем заносить данные по каждому созданному кораблю
// 	// эскадры, подробно эти данные рассмотрим при создании объектов кораблей
// 	this.squadron	= [];
// 	// флаг начала игры, устанавливается после нажатия кнопки 'Play' и запрещает
// 	// редактирование положения кораблей
// 	this.startGame	= false;
//   }
//   randomLocationShip = () => {
//     this.matrix = createMatrix();
 
// 	for (var i = 1, length = this.shipsData.length; i < length; i++) {
// 		var decks = this.shipsData[i][0];
 
// 		for (var j = 0; j < i; j++) {
// 			// получаем координаты первой палубы и направление расположения палуб (корабля)
// 			var fc = this.getCoordinatesDecks(decks);
// 			// добавим объекту 'fc' два новых свойства
// 			//количество палуб
// 			fc.decks 	= decks,
// 			// и уникальное имя корабля, которое будет использоваться в качестве его 'id'
// 			fc.shipname	= this.shipsData[i][1] + String(j + 1);
 
// 			// создаём экземпляр объекта корабля с помощью конструктора 'Ships'
// 			var ship = new Ships(this, fc);
// 				// генерируем новый корабль и выводим его на экран монитора		
// 				ship.createShip();
// 			// более подробно о функции-конструкторе 'Ships' и функции 'createShip'
// 			// будет рассказано позже
// 		}
// 	}
//   }
//   getCoordinatesDecks = (decks: any): any => {
//     // получаем коэффициенты определяющие направление расположения корабля
// 	// kx == 0 и ky == 1 — корабль расположен горизонтально,
// 	// kx == 1 и ky == 0 - вертикально.
// 	  let kx = getRandom(1),
//     ky = (kx == 0) ? 1 : 0,
//     x, y;

//     // в зависимости от направления расположения, генерируем
//     // начальные координаты
//     if (kx == 0) {
//       x = getRandom(9);
//       y = getRandom(10 - decks);
//     } else {
//       x = getRandom(10 - decks);
//       y = getRandom(9);
//     }

//     // проверяем валидность координат всех палуб корабля:
//     // нет ли в полученных координатах или соседних клетках ранее
//     // созданных кораблей
//     let result = this.checkLocationShip(x, y, kx, ky, decks);
//     // если координаты невалидны, снова запускаем функцию
//     if (!result) return this.getCoordinatesDecks(decks);

//     // создаём объект, свойствами которого будут начальные координаты и
//     // коэффициенты определяющие направления палуб
//     var obj = {
//       x: x,
//       y: y,
//       kx: kx,
//       ky: ky
//     };
//     return obj;
//   }
//   checkLocationShip = (x: any, y: any, kx: any, ky: any, decks: any) => {
//     let fromX, toX, fromY, toY;
 
//     // формируем индексы начала и конца цикла для строк
//     // если координата 'x' равна нулю, то это значит, что палуба расположена в самой верхней строке,
//     // т. е. примыкает к верхней границе и началом цикла будет строка с индексом 0
//     // в противном случае, нужно начать проверку со строки с индексом на единицу меньшим, чем у
//     // исходной, т.е. находящейся выше исходной строки
//     fromX = (x == 0) ? x : x - 1;
//     // если условие истинно - это значит, что корабль расположен вертикально и его последняя палуба примыкает
//     // к нижней границе игрового поля
//     // поэтому координата 'x' последней палубы будет индексом конца цикла
//     if (x + kx * decks == 10 && kx == 1) toX = x + kx * decks;
//     // корабль расположен вертикально и между ним и нижней границей игрового поля есть, как минимум, ещё
//     // одна строка, координата этой строки и будет индексом конца цикла
//     else if (x + kx * decks < 10 && kx == 1) toX = x + kx * decks + 1;
//     // корабль расположен горизонтально вдоль нижней границы игрового поля
//     else if (x == 9 && kx == 0) toX = x + 1;
//     // корабль расположен горизонтально где-то по середине игрового поля
//     else if (x < 9 && kx == 0) toX = x + 2;
  
//     // формируем индексы начала и конца цикла для столбцов
//     // принцип такой же, как и для строк
//     fromY = (y == 0) ? y : y - 1;
//     if (y + ky * decks == 10 && ky == 1) toY = y + ky * decks;
//     else if (y + ky * decks < 10 && ky == 1) toY = y + ky * decks + 1;
//     else if (y == 9 && ky == 0) toY = y + 1;
//     else if (y < 9 && ky == 0) toY = y + 2;
  
//     // запускаем циклы и проверяем выбранный диапазон ячеек
//     // если значение текущей ячейки равно 1 (там есть палуба корабля)
//     // возвращаем false 
//     for (var i = fromX; i < toX; i++) {
//       for (var j = fromY; j < toY; j++) {
//         if (this.matrix[i][j] == 1) return false;
//       }
//     }
//     return true;
//   }
// }

// function createMatrix() {
// 	var x = 10, y = 10, arr = [];
// 	for (var i = 0; i < x; i++) {
// 		arr[i] = [10];
// 		for(var j = 0; j < y; j++) {
// 			arr[i][j] = 0;
// 		}
// 	}
// 	return arr;
// }

// function getRandom(n: number) {
// 	// n - максимальное значение, которое хотим получить
// 	return Math.floor(Math.random() * (n + 1));
// }