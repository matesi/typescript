const Soma = (INDICE:number): number => {
    let result: number = 0;
    let K = 1;

    while (K < INDICE) {
        result = result + K;
        K++;
    }
    return result;
};

const result: number = Soma(12);

console.log(`Resultado: ${result}`);