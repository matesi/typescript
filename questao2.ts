/* ======= Item A */
const ItemA = (initial: number, sequence:number, limit: number): string => {
    let result: string = '';
    let pos: number = 1;
    let item: number = 0;

    while (pos <= limit) {
        if(pos === 1) {
            result = `${initial}`;
        } else {
            item = item === 0 ? initial + sequence : item + sequence;
            result += `,${item}`;
        }     
        pos = pos + 1;
    }
    return result;
};

const item_A: string = ItemA(1,2,5);
console.log(`Resultado item A: ${item_A}`);


/* ======= Item B */
const ItemB = (initial: number, sequence:number, limit: number): string => {
    let result: string = '';
    let pos: number = 1;
    let item: number = 0;

    while (pos <= limit) {
        if(pos === 1) {
            result = `${initial}`;
        } else {
            item = item === 0 ? initial * sequence : item * sequence;
            result += `,${item}`;
        }     
        pos = pos + 1;
    }
    return result;
};

const itemB: string = ItemB(2,2,7);
console.log(`Resultado item B: ${itemB}`);


/* ======= Items A,C,D,E,F */
const ItemACDEF = (array:Array<number>): Array<number> => {
    let result: Array<number> = [];
    let array_difference: Array<any> = [];
    let pos: number = 0;
    let difference: number = 0;

    while (pos < array.length) {
        result.push(array[pos]);
        if(pos+1 <= array.length-1) {
            difference = array[pos+1] - array[pos];
            array_difference.push(difference);
        } else {
            let sum_in_difference = array_difference[array_difference.length-1] - array_difference[array_difference.length - 2];
            let new_item = (array[array.length-1] + array_difference[array_difference.length-1]) + sum_in_difference;
            result.push(new_item);
            let new_difference = array_difference[array_difference.length-1] + sum_in_difference;
            array_difference.push(new_difference);
            break;
        }
        pos++;
    }

    console.log(`Diferenca: ${array_difference}`);

    return result;
};

const itemC: Array<number> = ItemACDEF([0, 1, 4, 9, 16, 25, 36]);
console.log(`Resultado item C: ${itemC}`);

const itemD: Array<number> = ItemACDEF([4, 16, 36, 64]);
console.log(`Resultado item D: ${itemD}`);

const itemE: Array<number> = ItemACDEF([1, 1, 2, 3, 5, 8]);
console.log(`Resultado item E: ${itemE}`);

const itemF: Array<number> = ItemACDEF([2,10, 12, 16, 17, 18, 19]);
console.log(`Resultado item F: ${itemF}`);

const itemA: Array<number> = ItemACDEF([1, 3, 5, 7]);
console.log(`Resultado item A: ${itemA}`);