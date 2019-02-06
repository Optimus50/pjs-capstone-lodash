const _ = {

    //clamp method
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    //InRange method
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = ((start <= number) && (number < end));
        return isInRange;
    },
    // word method
    words(string) {
        let words = string.split(' ');
        return words;
    },
    // pad method
    pad(string, length) {
        if (length <= string.length) {
            return string;
        } else {
            let padding = length - string.length;
            let startPaddingLength = Math.floor(padding / 2);
            let endPaddingLength = Math.ceil(padding - startPaddingLength);
            let paddedString = ' ';
            return paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);

        }
    },


    // has method
    has(object, key) {
        let firstValue = (key === undefined);
        let secondValue = Object !== undefined;
        console.log()

        let hasValue = firstValue || secondValue;
        return hasValue;
    },

    // invert method
    invert(object) {
        let invertedObject = {};
        let value = {};
        for (let key in object) {
            let originalValue = key.value;
            invertedObject.key = originalValue;
            invertedObject.originalValue = key;
        }
        return invertedObject;
    },

    // find key method
    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }

        }
        return undefined;

    },
    //drop method
    drop(array, number) {
        if (!number) {
            number = 1;
        }
        let droppedArray = array.slice(number);
        return droppedArray;

    },

    //drop method

    drop(array1, number) {
        if (!number) {
            number = 1;
        }
        let droppedArray = array1.slice(number);
        return droppedArray;

    },
    //dropWhile method
    dropWhile(array, predicate) {

        let dropNumber = array.findIndex((element, index) => {
            return !(predicate(element, index, array));

        });

        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    //chunk method
    chunk(array, size) {
        if (!size) {
            size = 1;
        }

        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            arrayChunks.push(array.slice(i, i + size));

        }
        return arrayChunks;

    }
}

// Do not write or modify code below this line.
module.exports = _;