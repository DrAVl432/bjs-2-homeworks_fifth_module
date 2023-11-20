function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: null,
			max: null,
			avg: null
		};
	};
	let min = 0; //= arr[0];
  let max = 0; //= arr[0];
	let summa = 0;// = arr[0];
  let avg = 0;
let initialValue = 0
	 max = Math.max(...arr);
	 min = Math.min(...arr);

//	for (let i = 0; i < arr.lenght; i++) {
		// if (arr[i] < min) {
		//   min = arr[i];
		// }
		// if (arr[i] > max) {
		//   max = arr[i];
		//}
//		summa += arr[i];
	//};
	//const sum = arr.reduce((acc, number) => acc + number, 0);
	summa = arr.reduce(
	 (accumulator, currentValue) => accumulator + currentValue,
	  initialValue,);
	avg = summa / arr.length;

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	};
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork(arrOfArr, func) {
}