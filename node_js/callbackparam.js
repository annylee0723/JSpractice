function printMessageWithParams(func, name) {
    console.log('Printing message,,,');
    func(name);
}

function sayHello(name) {
    console.log(`Hello ${name}!`);
}

//printMessageWithParams(sayHello('Anny'))// 이러면 에러뜸 
printMessageWithParams(sayHello,'Anny')

printMessageWithParams(name=> console.log(`Bye ${name}!`), 'Anny')