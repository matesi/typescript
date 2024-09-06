var Soma = function (INDICE) {
    var result = 0;
    var K = 1;
    while (K < INDICE) {
        result = result + K;
        K = K + 1;
    }
    return result;
};
var result = Soma(12);
console.log(result);
