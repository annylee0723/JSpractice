let counter = 0;
setInterval(() => {
    counter += 1
    console.log('counter', counter);
    console.log('now', new Date());
}, 1000);