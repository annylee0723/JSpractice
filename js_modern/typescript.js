const n = 1; //number
console.log('number', n);

const s = "Hello World";//string
console.log("string", s);

const b = true; //boolean
console.log("boolean", b);

const m = null; //null
console.log("null", m);

const p = undefined;
console.log("undefined", p);

const a = [1, 2 ,3]; // array
console.log("array", a);

const a1 = a[1]; // array index
console.log("array index 1", a1);

a[1] = 4;
console.log("changed", a1); //이래도 4가 아닌, 2가 출력됨
console.log("changed", a[1]); //하지만 이건 4 출력

const o = {
    name: "Hello",
    age: 1,
    smoke: false
};
console.log("object", o);

//BigInt와 Symbol
const user = Symbol();
console.log("comparsion", user === user);

//type of
console.log(typeof ("hello")); // string 출력
console.log (typeof null); //null은 object 출력됨

//js에서 함수는 객체일까 아닐까? -> 객체이다.
//원칙과 예외: 1. null의 typeof는 object, 2. function은 object가 맞지만, typeof는 function이 출력됨
