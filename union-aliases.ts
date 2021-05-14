type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


function combined(input1: Combinable, input2: Combinable, conversionType: string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;

    }
    else {
        result = input1.toString() + input2.toString()
    }
    if (conversionType === 'as-number') {
        return +result
    }
    else {

        return result.toString();
    }
}

const combinedAges = combined(30, 44, 'as-number');

console.log(combinedAges)

