function printMessage(func) { //이게 파라미터
    console.log('Printing message...');
    func(); //여기 호출하기 때문
}

function sayHello() {
    console.log('Hello World')
}
printMessage(sayHello); //함수 호출(sayHello()) 결과를 넘긴게 아니라 함수 자체를 넘김
// 이게 아규먼트

printMessage(
    () => {
        console.log('Hi World');
    }
)

printMessage(() => console.log('Hi World'));

