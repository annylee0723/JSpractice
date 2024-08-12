function sayHi(name) {
    console.log("Hi "+name);
}

sayHi('Alex');
sayHi(); //undefined로 나온당

//argument 문법
function printArguments() {
    for (const argument of arguments) {
        console.log('arg', argument);
    }
}

//Rest Param -> 인수 갯수를 여러개 받는 다는 것을 알 수 있음
function printArguments2(...args) {
    for (const arg of args) {
        console.log('arg2', arg);
    }
}

printArguments(1, 2, 3);
printArguments2(1, 2, 3);

//index 대신 first, second 사용하기
function printRankingList(first, second, ...others){
    console.log('first', first);
    console.log('second', second);
    for (const other of others){
        console.log(other);
    }
}

printRankingList('Alex');
printRankingList('Alex', 'Jerry');