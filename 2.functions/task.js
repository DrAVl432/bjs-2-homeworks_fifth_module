//const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: null,
			max: null,
			avg: null
		};
	};
	let min = 0;
	let max = 0;
	let summa = 0;
	let avg = 0;
	let initialValue = 0
	max = Math.max(...arr);
	min = Math.min(...arr);
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
	let summa = 0;
	let initialValue = 0
	if (arr.length === 0) {
		return 0
	};
	summa = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,);
	summa = Number(summa.toFixed(0));
	return summa

}
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0
	};
	let min = 0;
	let max = 0;
	let avg = 0;
	max = Math.max(...arr);
	min = Math.min(...arr);
	avg = max - min;
	return avg
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	avg = sumEvenElement - sumOddElement;
	return avg;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement = countEvenElement + 1
		}
	}
	avg = sumEvenElement / countEvenElement;
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		console.log(result);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult
}

makeWork(arr, summElementsWorker);
makeWork(arr, differenceMaxMinWorker);
makeWork(arr, differenceEvenOddWorker);
makeWork(arr, averageEvenElementsWorker);