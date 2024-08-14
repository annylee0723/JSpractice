function printCatName(user) {
    console.log(user.cat && user.cat.name); //이걸 설정해주면 에러는 안남
    console.log(user.cat?.name); //optional Changing이걸 설정해주면 에러는 안남
}

const user1 = {
    name: 'Minion',
    cat: {
        name: 'Bello',
        bread: 'British Shorthair'
    }
}

const user2 = {
    name:'Jay'
}

console.log('user2 cat', user2.cat); //undefined가 나옴
printCatName(user2); //에러가 뜸
