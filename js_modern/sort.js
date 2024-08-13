const numbers = [1, 10, 4, 21, 36000];

numbers.sort(); //앞자리 수만 기준으로 sorting됨(문자 열로 변환된 것이기 때문)
numbers.sort(
    function(a, b) {
        return a - b;
    }
);
let sorting = numbers.sort((a, b) =>  a - b);

console.log('numbers', numbers);
console.log(sorting)

//shallow copy: 얕은 복사
let sorting2 = numbers.sort((a, b) =>  b - a);
console.log(sorting2)

//reverse
const letters = ['a', 'b', 'c'];
letters.reverse(); //정렬이 아닌, 순서를 뒤집어주는 메소드
console.log('letters', letters);