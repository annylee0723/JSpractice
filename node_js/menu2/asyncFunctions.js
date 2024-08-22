 export async function printMenus() {
    const response = await fetch('https://learn.codeit.kr/api/menus');
    const data = await response.json();
    console.log(data);
}

//async를 붙여주지 않으면 동기 함수임
//await가 없었다면? error가 나지 않는다. 
//하지만, 반대로 await를 걸면 귀신같이 문법 에러가 생김 왜??
//async를 달아줌으로써 문법을 맞춰줘야 한다.
