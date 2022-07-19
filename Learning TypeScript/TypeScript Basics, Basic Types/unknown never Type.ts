// ##############################################################

// The unknown Type

let userInput: unknown; // RESTRICTIVE
let userInputAny: any;
let userName: string;

userInput = 5;
userInput = 'Max';
userName = userInputAny;
// userName = userInput; // ERROR

if (typeof userInput === 'string') {
  userName = userInput;
}

// ##############################################################

// The never Type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);
