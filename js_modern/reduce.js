const numbers = [1, 2, 3, 4];

let sum = 0
numbers.forEach(element => {
    sum += element
});
console.log('sum', sum);

const sumAll = numbers.reduce(
    (accumulator, element, index, array) => {
        return accumulator + element;
    }
, 0
);
console.log("sumAll", sumAll);

//factorial
const factorial = numbers.reduce(
    (accumulator, element, index, array) => { //accumulator라고 쓸 필요 없슴, 초기값 설정해 주는 거임 
        return accumulator * element;
    }
, 1
);
console.log("factorial", factorial);

const memebrs2 = [1,2,3,4];

const multipleSum = numbers2.reduce(
    (accum, element, index, array) => {
        accum + element*2;
    }
,1
);
console.log("answer", multipleSum);