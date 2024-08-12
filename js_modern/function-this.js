console.log('this', this); //{} 출력됨
function sayHi() {
    console.log
}
const user ={
    firstName: "Tess",
    lastName: "Jang",
    getFullName: function() {
        return `${this.firstName}${this.lastName}`;
    }
}
console.log(user.getFullName());
// this를 제외하면, undefined 이슈로 에러가 출력된다. 
// 변수 이름이 아니라 property 이름을 출력해야 하기 때문

//아래껀 undefinedundefined 출력됨. 왤까?
const user2 = {
    firstName: "Anny",
    lastName: "Lee",
    getFullName: () =>{
        return `${this.lastName}${this.fullName}`;
    }
}
console.log(user2.getFullName());
//왜냐면, 화살표 함수는, 고전 함수와 달리 함수가 선언된 시점부터 컨택스트가 시작됨.
//즉, 화살표 함수는 this를 자신이 정의된 위치의 스코프에서 가져오므로, 객체의 메서드로 사용할 때는 의도한 this를 사용할 수 없게 됩니다.

function printThis() {
    console.log(this.content);
}

const myObj = {
    content: 'Anny Lee',
    printContent: printThis
}

myObj.printContent();

const otherObj = {
    content: "codeit",
    age: 7,
    printContent: printThis
}

otherObj.printContent();