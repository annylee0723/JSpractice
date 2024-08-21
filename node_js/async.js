function sayHello() {
    console.log('hello');
}
console.log(`1`);
console.log(`2`);
setTimeout(
    sayHello,
    1000 //1sec
);
console.log(`3`);
//실행을 뒤로 미루는 것이다 -> 이게 왜 비동기?
//동기화 synchronization -> 스토리지 클라우드 - 양쪽을 같게 만든다
//시간에 대한 동기화: 시간 맞추기
//setTimeout: 비동기 함수

