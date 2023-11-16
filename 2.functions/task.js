function getArrayParams(...arr) {
if (arr.length === 0) {
  return {
    min: null,
    max: null,
    avg null
  };
}
let min = arr[0];
let max = arr[0];
let avg = arr[0];

for (let i = 1; i < arr.lenght; i++) {
  if arr[i] < min {
    min = arr[i];
  }
  if arr[i] > max {
    max = arr[i];
  }
  sum += arr[i]
}
avg = sum/arr.length;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
