"use strict";
var unserInput;
var userName;
unserInput = 5;
unserInput = 'Name';
if (typeof unserInput === 'string') {
    userName = unserInput;
}
//never type
function generateError(message, errorCode) {
    throw { message: message, errorCode: errorCode };
}
generateError('an error occured', 500);
