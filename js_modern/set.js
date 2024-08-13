const members = new Set();

members.add("Jay");
members.add("kay");
members.add("el");
console.log(members.has("el"));
console.log(members.has("Jason"));

//집합은 인덱스의 개념이 없음
members.delete('el');
console.log(members.size);

//members.clear
//console.log(members.size)

for (const memner of members) {
    console.log(member);
}

members.forEach(member =>{
    console.log(member);
})

//array는 중복 허용 된다