console.log('1');

setTimeout(() => console.log('2'), 0);

console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');

//비동기 함수는 다른 함수들을 모두 실행하고 나서 나를 실행한다.
//ms(인터벌) 값 차이로 발생하는 결과
//내가 짠 setTimeout의 시간이 준수되지 않을 수 있다.
