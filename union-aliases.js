"use strict";
function combined(input1, input2, conversionType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (conversionType === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combined(30, 44, 'as-number');
console.log(combinedAges);
