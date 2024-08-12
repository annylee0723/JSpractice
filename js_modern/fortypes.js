let sum = 0;
for(let i = 1; i <= 5; i++){
    console.log('i', i);
    sum += i;
}
console.log('sum', sum);
// console.log('i again', i); 전역 변수라서 출력 안됨