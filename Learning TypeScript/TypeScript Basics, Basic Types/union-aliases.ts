// # Union Types

function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
// console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);

// ########################################################

// # Literal Types
// using literal types you can allow an exact value
// which a string, number, or boolean must have

function combineLiteral(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAgesLiteral = combineLiteral(30, 26, 'as-number');
// console.log(combinedAges);

const combinedStringAgesLiteral = combineLiteral('30', '26', 'as-number');
// console.log(combinedStringAgesLiteral);

const combinedNamesLiteral = combineLiteral('Max', 'Anna', 'as-numberr');
// console.log(combinedNames);

// ########################################################

// # Type Aliases Custom Types

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combineTypeAliases(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: Combinable;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
