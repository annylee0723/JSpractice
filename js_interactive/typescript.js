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

//object
const o = {
    name: "Hello",
    age: 1,
    smoke: false
};
console.log("object", o);

//새로운 데이터 타입: symbol, BigInt
const user = Symbol();
console.log("comparsion", user === user);