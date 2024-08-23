import { printEmployees } from './asyncFunctions.js';
//import는 전체 모듈을 먼저 실행하기 때문에 10부터 출력되는 것.

// const employees = printEmployees()
// console.log(employees);

console.log('1');

async function run() {
  await printEmployees();
  console.log('5');
  console.log('6');
}

run();

console.log('7');
console.log('8');


