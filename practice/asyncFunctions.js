export async function printEmployees() {
    console.log('2');
    const response = await fetch('https://learn.codeit.kr/api/employees');
    console.log('3');
    const data = await response.json();
    console.log('4');
  }

console.log(10);