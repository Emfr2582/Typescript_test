let unserInput: unknown;
let userName: string;

unserInput = 5;
unserInput = 'Name';
if (typeof unserInput === 'string') {

    userName = unserInput;
}


//never type
function generateError(message: string, errorCode: number): never{
    throw {message: message, errorCode: errorCode}
}

generateError('an error occured', 500);