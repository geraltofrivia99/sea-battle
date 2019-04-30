
export class Ships {
  player: any;
  shipname: any;
  decks: any;
  x0: any;
  y0: any;
  kx: any;
  ky: any;
  hits: any;
  matrix: any;

  constructor(player: any, fc: any) {
    this.player 	= player;
	// уникальное имя корабля
    this.shipname 	= fc.shipname;
    //количество палуб
    this.decks		= fc.decks;
    // координата X первой палубы
    this.x0			= fc.x;
    // координата Y первой палубы
    this.y0			= fc.y;
    // направлении расположения палуб
    this.kx			= fc.kx;
    this.ky 		= fc.ky;
    // счётчик попаданий
    this.hits 		= 0;
    // массив с координатами палуб корабля
    this.matrix		= [];
  }

  createShip = () => {
    let k		= 0, // счётчик циклов
		x		= this.x0,
		y		= this.y0,
		kx		= this.kx,
		ky		= this.ky,
		decks	= this.decks,
		player	= this.player
 
    // количество циклов будет равно количеству палуб создаваемого корабля
    while (k < decks) {
      // записываем координаты корабля в матрицу игрового поля
      // теперь наглядно должно быть видно зачем мы создавали два
      // коэффициента направления палуб
      // если коэффициент равен 1, то соответствующая координата будет
      // увеличиваться при каждой итерации
      // если равен нулю, то координата будет оставаться неизменной
      // таким способом мы очень сократили и унифицировали код
      // значение 1, записанное в ячейку двумерного массива, говорит о том, что
      // по данным координатам находится палуба некого корабля
      player.matrix[x + k * kx][y + k * ky] = 1;
      // записываем координаты корабля в матрицу экземпляра корабля
      this.matrix.push([x + k * kx, y + k * ky]);
      k++;
    }
  
    // заносим информацию о созданном корабле в массив эскадры
    player.squadron.push(this);
    // если корабль создан для игрока, выводим его на экран
    if (player == user) this.showShip();
    // когда количество кораблей в эскадре достигнет 10, т.е. все корабли
    // сгенерированны, то можно показать кнопку запуска игры
    if (user.squadron.length == 10) {
      getElement('play').setAttribute('data-hidden', 'false');
    }
  }
  showShip = () => {
    let div			= document.createElement('div'),
		// присваиваем имя класса в зависимости от направления расположения корабля
		dir			= (this.kx == 1) ? ' vertical' : '',
		// из имени корабля убираем цифры и получаем имя класса
		classname	= this.shipname.slice(0, -1),
		player		= this.player;
 
    // устанавливаем уникальный идентификатор для корабля
    div.setAttribute('id', this.shipname);
    // собираем в одну строку все классы 
    div.className = 'ship ' + classname + dir;
    // через атрибут 'style' задаём позиционирование кораблю относительно
    // его родительского элемента
    // смещение вычисляется путём умножения координаты первой палубы на
    // размер клетки игрового поля, этот размер совпадает с размером палубы
    div.style.cssText = 'left:' + (this.y0 * player.shipSide) + 'px; top:' + (this.x0 * player.shipSide) + 'px;';
    // вставляем созданный элемент корабля в 'document'
    player.field.appendChild(div);
  }

  cleanField = () => {
		// создаём объект игрового поля, на котором должны быть удалены корабли
    var parent	= this.field,
      // получаем значение атрибута 'id', которое понадобится для дальнейшей
      // DOM-навигации
      id		= parent.getAttribute('id'),
      // получаем коллекцию все кораблей, которые нужно удалить
      divs 	= document.querySelectorAll('#' + id + ' > div');
  
    // перебираем в цикле полученную коллекцию и удаляем входящие в неё корабли
    [].forEach.call(divs, function(el) {
      parent.removeChild(el);
    });
    // очищаем массив объектов кораблей
    this.squadron.length = 0;
  }
}