/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
const res1 = await fetch ("https://learn.codeit.kr/api/avatars");
const json1 = await res1.json()

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터로 offset을 5, limit을 10으로 설정하세요. */
const res2 = await fetch ("https://learn.codeit.kr/api/avatars?offset=5&limit=10")
const json2 = await res2.json()

/* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
const res3 = await fetch ("https://learn.codeit.kr/api/avatars/7")
const json3 = await res3.json()

console.log(json1);
console.log(json2);
console.log(json3);

//promise.all를 이용해서 보내기
// Promise.all([res1, res2, res3])
// .then(async ([res1, res2, res3]) => {
//   console.log(await res1.json());
//   console.log(await res2.json());
//   console.log(await res3.json());
// });