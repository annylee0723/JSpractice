const a = 3;
const b = {name: "Anny"};
const c = function(name){
    console.log("Hello" + name);
};
//함수명이 없어도 anonymous(익명) 취급이 된다
console.log(c);
console.log(c("Alex")); //Hello Alex와 undefined 동시에 출력됨
/* 
실행 과정 요약
c("Alex") 함수가 실행되어 console.log("Hello Alex")가 먼저 실행되고, "Hello Alex"가 출력됩니다.
c("Alex") 함수가 undefined를 반환하기 때문에 console.log는 undefined를 출력합니다.
*/
c("Alex");

const d = {age: 3, name: "Alex",
    hobby: function() {
        console.log("Elden Ring");
    }
};

console.log(d);
console.log(d.name, d.age)
d.hobby();

function myFunction() {
    return function() {
        console.log("Hi?");
    }
}
myFunction()();
const f = myFunction();
console.log(f);
f();