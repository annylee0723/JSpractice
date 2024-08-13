const codeit = new Map();

codeit.set('title', 'Inside out 2');
codeit.set(2015, '...');
console.log('codeit', codeit);

console.log(codeit.get(2015));

const codeit2 = {
    title: "Inside out 2"
}
console.log('codeit2', codeit2);
//set: 순서는 상관 없지만, 중복은 처리해준다
//key는 꼭 문자열이어야 한다.

console.log(codeit.has('title'));
console.log(codeit.has('name'));

console.log(codeit.size);

codeit.delete('title');
console.log(codeit.get('title'));
