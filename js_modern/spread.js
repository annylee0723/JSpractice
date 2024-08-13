const webPublishing = ['html', 'css'];
console.log('wp', typeof webPublishing);

const interactiveWeb = [...webPublishing, 'JS'];
console.log('iw', interactiveWeb);

let i2 = ['js']
//unrolling (no loop)
for (const web of webPublishing) {
    i2.unshift(web)
}
console.log('i2', i2);

let i3 = ['js']
for (let i=webPublishing.length - 1; i >= 0; i--) {
    i3.unshift(webPublishing[i])
}
console.log('i2', i3);


const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3= [...arr1, ...arr2];
console.log('arr3', arr3);

//spread array into object
//히지만, spread onject into array는 안된다.
const members = ['Apple', 'Banana', 'Lemon'];
const newObject = {... members};

console.log('no', newObject);