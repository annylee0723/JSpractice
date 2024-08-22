import { printMenus } from "./asyncFunctions.js"; // 끝에 js 붙여줘야함 

console.log('Printing Menus:');

//await이 없으면 제일 나중에 실행, 있으면 얘 먼저 실행되고 그 다음에 finished 출력
await printMenus();

console.log('Finished');
