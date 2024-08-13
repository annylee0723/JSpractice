const numbers = [1, 2, 3];
let sum = 0;
//foreach:higher order function: 고차함수
//요즘 대게니까 잘 외우도록
numbers.forEach(
    //callback: 함수 안의 요소(element, index, array)를 말함.
    function(element, index, array) {
        console.log(element, index, array);
        sum += element;
    }
);
console.log('sum', sum);

let sum2 = 0;
const result = numbers.forEach(
    (element, index, array) =>
    {
        sum2 += element;
    }
);
console.log('sum2', sum2);
console.log("result", result); //undefined가 나옴. == forEach는 표현식 X

//map = 대응시키다, 얘는 표현식임. 반환하는게 있음
const twiceNumb = numbers.map(
    // 원소에 대한 대칭으로 2씩 곱해주는 것
    (element, index, array) => {
        return element * 2;
    }
);
console.log('tn',twiceNumb);

// 더 짧은 버전
const twiceNumb2 = numbers.map(
    // 원소에 대한 대칭으로 2씩 곱해주는 것
    element  =>  element * 2
);
console.log('tn2',twiceNumb2);

//filter: 골라내는 역할
const device = [
    {name: "GalaxyNote", brand: "Samsung",},
    {name: 'MacbookPro', brand: "Apple"},
    {name: "Gram", brand: "LG"},
    {name: "MacbookAir", brand: "Apple"}
];

const apples = device.filter(
    (element, index, array) => {
        return element.brand === "Apple";
    }
)
console.log('apple', apples);

//다시 줄이기
const apples2 = device.filter(
    element => element.brand === "Apple"
)
console.log('apple2', apples2);