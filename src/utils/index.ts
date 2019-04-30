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