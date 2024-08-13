//find (filter는 여러개의 값을 찾아 주고, find는 하나의 값만 찾아 줌)
const device = [
    {name: "GalaxyNote", brand: "Samsung",},
    {name: 'MacbookPro', brand: "Apple"},
    {name: "Gram", brand: "LG"},
    {name: "MacbookAir", brand: "Apple"}
];

const myLaptop = device.find(
    (element, index, array) => {
        console.log('index', index); //MacAir까진 가지 않는다.
        return element.name === 'Gram';
    }
);
console.log(myLaptop);

//some
const oddnumbers = [1, 3, 5, 7, 9];
const sumreturn = oddnumbers.some((element, index, array) => {
    console.log('index', index); // 5보다 큰 수를 찾았을 때 순환을 멈춘다 -> 인덱스가 7까지만 도는 이유
    return element > 5; //5보다 큰 수가 있는지 묻는 것
});
console.log('some', sumreturn);

//every
const everyreturn = oddnumbers.every((element, index, array) => {
    console.log('index', index);
    return element > 5;
});
console.log("every", everyreturn); //false가 나옴, array 내 수가 모두 6 이상이어야만 true 출력

