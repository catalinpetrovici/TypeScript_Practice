function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    return phrase + n1 + n2;
  }
  return n1 + n2;
}

let number1: number;
number1 = 5;

const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
// resultPhrase = 0; // Type 'number' is not assignable to type 'string'.

add(+number1, +number2, printResult, resultPhrase);
