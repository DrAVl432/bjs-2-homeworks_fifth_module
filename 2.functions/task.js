function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: null,
			max: null,
			avg: null,
		};
	}
	avg = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
			arr.length
	return {
		min: Math.min(...arr),
		max: Math.max(...arr),
		avg: Number(avg.toFixed(2)),
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
}
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);
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
			countEvenElement = countEvenElement + 1;
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
	return maxWorkerResult;
}