const user = {
    name : "Alex",
    age: 3
};
console.log('user name', user.name);
console.log('user [name]', user['name']);

const name = 'Alex';
const age = 3;

const user2 = {
    name: name,
    age: age
};
console.log('user2', user2);

// 신문법
const user3 = {
    name,
    age
};
console.log('user3', user3);

//정적 분석: 실행하기 전에 소스코드만으로 분석한다. -> VScode의 장점
//Laugnage Server -> 이걸 사용하기 때문에 가능했움
const user4 ={
    firstName: "Alex",
    lastName: "Lee",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log('user4', user4.getFullName());

const user5 ={
    firstName: "Alex",
    lastName: "Lee",
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log('user5', user5.getFullName());

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
    ['topic' + 'name']: 'Modern JS',
    [getJob()] : 'lecture',
    [propertyName]: 2017,
};

console.log('codeit', codeit);