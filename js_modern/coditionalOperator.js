const cutOff = 80;

const passChecker = (score) => {
    if (score > cutOff) {
        return "pass!";
    } else {
        return "fail!";
    }
};
console.log(passChecker(70));

const passChecker2 = (score) => {
    return score > cutOff ? "pass!" : "fail!";
}
console.log(passChecker2(75));

const passChecker3 = (score) => score > cutOff ? "Pass" : "Fail";
console.log(passChecker3(75));

// 단일 입력값이라면 괄호도 있을 필요가 없다.
const passChecker4 = score => score > cutOff ? "pass" : "fail";
console.log(passChecker4(90));