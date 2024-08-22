console.log('1');

setTimeout(() => console.log('2'), 1001);
setTimeout(() => console.log('3'), 1000);

console.log('4');

//1 프로세스 - 1싱글 스레드
//이벤트 큐의 개념임
