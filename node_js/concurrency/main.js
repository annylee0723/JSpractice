import { getEmployees, getMenus } from './asyncFunctions.js';

// 여기에 코드를 작성하세요.
//순차적으로 직원 데이터 -> 메뉴 데이터 가져오기
const employees = await getEmployees();
const menus = await getMenus();


// 테스트 코드
// console.log('직원 데이터:');
// console.log(employees);
// console.log('메뉴 데이터:');
// console.log(menus);

const promises = [];
const employeesPromise = getEmployees();
const menuPromise = getMenus();

// getEmployees().then(employees => {
//     console.log('직원데이터');
//     console.log(employees)
//     getMenus().then(menus => {
//         console.log('메뉴 데이터');
//         console.log(menus);
//     })
// })

promises.push(employeesPromise);
promises.push(menuPromise);

const allPromise = Promise.all(promises);

const result = await allPromise;
console.log('result0', result[0]);
console.log('result1', result[1]);