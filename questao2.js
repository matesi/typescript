/* ======= Item A */
var ItemA = function (initial, sequence, limit) {
    var result = '';
    var k = 1;
    var item = 0;
    while (k <= limit) {
        if (k === 1) {
            result = "".concat(initial);
        }
        else {
            item = item === 0 ? initial + sequence : item + sequence;
            result += ",".concat(item);
        }
        k = k + 1;
    }
    return result;
};
var itemA = ItemA(1, 2, 5);
console.log("Resultado item A: ".concat(itemA));
/* ======= Item B */
var ItemB = function (initial, sequence, limit) {
    var result = '';
    var k = 1;
    var item = 0;
    while (k <= limit) {
        if (k === 1) {
            result = "".concat(initial);
        }
        else {
            item = item === 0 ? initial * sequence : item * sequence;
            result += ",".concat(item);
        }
        k = k + 1;
    }
    return result;
};
var itemB = ItemB(2, 2, 7);
console.log("Resultado item B: ".concat(itemB));
/* ======= Items C,D,E,F */
var ItemCDEF = function (array) {
    var result = [];
    var array_difference = [];
    var k = 0;
    var difference = 0;
    while (k < array.length) {
        result.push(array[k]);
        if (k + 1 <= array.length - 1) {
            difference = array[k + 1] - array[k];
            array_difference.push(difference);
        }
        else {
            var sum_in_difference = array_difference[array_difference.length - 1] - array_difference[array_difference.length - 2];
            var new_item = (array[array.length - 1] + array_difference[array_difference.length - 1]) + sum_in_difference;
            result.push(new_item);
            var new_difference = array_difference[array_difference.length - 1] + sum_in_difference;
            array_difference.push(new_difference);
            break;
        }
        k++;
    }
    console.log("Diferenca: ".concat(array_difference));
    return result;
};
var itemC = ItemCDEF([0, 1, 4, 9, 16, 25, 36]);
console.log("Resultado item C: ".concat(itemC));
var itemD = ItemCDEF([4, 16, 36, 64]);
console.log("Resultado item D: ".concat(itemD));
var itemE = ItemCDEF([1, 1, 2, 3, 5, 8]);
console.log("Resultado item E: ".concat(itemE));
var itemF = ItemCDEF([2, 10, 12, 16, 17, 18, 19]);
console.log("Resultado item F: ".concat(itemF));
var itemAa = ItemCDEF([1, 3, 5, 7]);
console.log("Resultado item A: ".concat(itemAa));
var itemBb = ItemCDEF([2, 4, 8, 16, 32, 64]);
console.log("Resultado item B: ".concat(itemBb));
