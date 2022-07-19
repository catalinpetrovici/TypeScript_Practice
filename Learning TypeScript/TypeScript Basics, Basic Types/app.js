// ##############################################################
// The unknown Type
var userInput; // RESTRICTIVE
var userInputAny;
var userName;
userInput = 5;
userInput = 'Max';
userName = userInputAny;
// userName = userInput; // ERROR
if (typeof userInput === 'string') {
    userName = userInput;
}
// ##############################################################
// The never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
