/* ======= Item A */
const ItemA = (initial: number, sequence:number, limit: number): string => {
    let result: string = '';
    let k: number = 1;
    let item: number = 0;

    while (k <= limit) {
        if(k === 1) {
            result = `${initial}`;
        } else {
            item = item === 0 ? initial + sequence : item + sequence;
            result += `,${item}`;
        }     
        k = k + 1;
    }
    return result;
};

const itemA: string = ItemA(1,2,5);
console.log(`Resultado item A: ${itemA}`);


/* ======= Item B */
const ItemB = (initial: number, sequence:number, limit: number): string => {
    let result: string = '';
    let k: number = 1;
    let item: number = 0;

    while (k <= limit) {
        if(k === 1) {
            result = `${initial}`;
        } else {
            item = item === 0 ? initial * sequence : item * sequence;
            result += `,${item}`;
        }     
        k = k + 1;
    }
    return result;
};

const itemB: string = ItemB(2,2,7);
console.log(`Resultado item B: ${itemB}`);


/* ======= Item C */
const ItemC = (array:Array<number>): Array<number> => {
    let result: Array<number> = [];
    let k: number = 0;
    let item: number = 1;

    array.forEach(element => {

        result.push(element);
        k = k + 1;
    });

    while (k < array.length + 1) {
        
        if(k === 1) {
            result = `${initial}`;
        } else {
            item = item === 1 ? initial * sequence : item * sequence;
            result += `,${item}`;
        }     
        k = k + 1;
    }
    return result;
};

const itemC: Array<number> = ItemC([0, 1, 4, 9, 16, 25, 36]);
console.log(`Resultado item C: ${itemC}`);