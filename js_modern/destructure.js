const members = ['Apple', 'Banana', 'Lemon'];
// macbook, ipad, coupon들은 다 변수명들임
const [macbook, ipad, coupon] = members

console.log(macbook);
console.log(ipad);
console.log(coupon);

// 아래와 같은 원리임ㅇㅇ
const macbook1 = members[0];
const ipad1 = members[1];
const coupon1 = members[2];

//members가 많은건 상관 없지만, 적으면 큰일남
const members2 = ['Apple', 'Banana'];
const [macbook2, ipad2, coupon2] = members2
console.log(macbook2);
console.log(ipad2);
console.log(coupon2); //coupon2는 undefined가 나옴 - 에러가 나진 않는다

const macbookPro = {
    title2: 'MBP 16',
    price2: 4000000,
    memory: '16G',
    storage: '1TB'
};

const {title, price} = macbookPro; // object에는 {}를 사용해줘야함, 변수명에 오타 등 오류가 있다면 undefined 출력됨
console.log(title);
console.log(price);

const members3 = ['Jay', 'Alex', undefined, "kay", "el"]; //undefiend를 설정
const [mac, pad, airpods = 'Jack', ...coupons] = members3; //undefined 선언 후 변수 넣어줌
console.log(mac);
console.log(pad);
console.log(airpods);
console.log(coupons);

const {title2, price2, color="silver", ...rest} = macbookPro; 
console.log(title2);
console.log(price2);
console.log(color);
console.log(rest); // object의 나머지를 레스트로 받을 수 있음
console.log(rest.memory);