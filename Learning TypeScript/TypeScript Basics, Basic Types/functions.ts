// Functions Return Types & Void

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

// ##############################################################

// Functions as Types

let combineValues;
combineValues = add;
// combineValues = 5;
// console.log(combineValues(8, 8)); // ERROR

let combineValuesF: (n1: number, n2: number) => number;
combineValuesF = add;
// combineValuesF = printResult; // Type 'void' is not assignable to type 'number'.
console.log(combineValues(8, 8));

// ##############################################################

// Function Types & Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => console.log(result));
