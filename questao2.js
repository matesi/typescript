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
