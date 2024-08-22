//const response = fetch('https://learn.codeit.kr/api/menus');
//promise -> pending만 됨, 왜 응답이 안올까?
//서버를 갔다가 오는데 시간이 걸린다.
//서버에서 응답이 올 때 까지 기다리지 않는다!
//console.log(response);

//setTimeout을 통해서 콜백을 해볼까?
//setTimeout(() => console.log('response later', response), 1000);
//출력 됨, 하지만 1초나 기다려야함

// 여기에 코드를 작성하세요.
const response = await fetch('https://learn.codeit.kr/api/menus');
const data = await response.json();
console.log(data);
//응답을 받을 때까지 기다렸다가 받는 것
//promise를 반환하는 함수 앞에 쓰는 것, promise가 먼저 이행 된 다음에 await이 실행됨
