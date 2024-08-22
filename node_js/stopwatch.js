//stop watch

let counter = 0;
setInterval(() => {
    counter += 1
    console.log('counter', counter);
    console.log('now', new Date());
}, 1000);

setTimeout(() => clearInterval(intervalID), 7000);

console.log('End');