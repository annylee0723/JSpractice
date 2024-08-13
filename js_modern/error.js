//throw new TypeError('Type error happened');
console.log('ok'); //에러가 발생하면 다음 문장이 실행되지 않는다.

console.log("Start-------------------------------");
try {
 //에러가 날 소지가 있는 코드들,, 
 console.log('try');
 console.log('name', name);
 console.log('try again'); //얘는 위애 오류 때문에 실행 안됨
//  try{
//     console.log('name2', name2);
//  } catch (error2) {
//     console.log("error2")
//  }
} catch(error) {
    console.log('error');
} finally { //try블럭이 성공적으로 마춰지던, 중간에 Error로 가던, 최종으로 돌아온다.
    console.log('finally')
}
// 뒤처리를 담당하는게 finally
console.log("End-------------------------------");