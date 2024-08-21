function forEach(callback, array) {
    for (let elt of array) {
        console.log(callback(elt));
    }
}

const words = ['Alex', 'Jay', 'Ely'];

function identity(elt) {
    return elt;
}

forEach(identity, words);

function upperCase(elt) {
    return elt.toUpperCase();
}

forEach(upperCase, words);