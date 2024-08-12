const a = function() {
    console.log("hello");
}
a();
//function() -> () => **함수명을 쓰지 않아야 사용 가능
const b = () => {
    console.log("Hello");
}
b();
//param이 1개면 () 생략 가능
const c = number => {
    return number * 2;
}

console.log('c()', c(2));

//return 생략 가능 -> 이 사용법은 유리하긴 하지만, return문이 없을 경우에는 무리가 있다.
const d = (a,b) => {
    return a + b;
}
const e = (a,b) => a + b;
console.log("e(1,2)", e(1,2));

// 일반 함수와의 차이 1. argument가 없다 2. this가 가리키는 값이 일반 함수와 다름
