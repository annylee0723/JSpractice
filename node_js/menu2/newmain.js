import { getInterviews, getEmployees } from './asyncFunctions.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

// 여기에 코드를 작성하세요.

const employees = await getEmployees();
const interviews = await getInterviews();

const passedInterviews = interviews.filter(interview => interview.result === "pass");
passedInterviews.forEach(interview => addNewEmployee(employees, interview));

console.log(employees);

//훨신 짧게 만들자
interviews.filter(interview => interview.result === "pass")
  .forEach(interview => addNewEmployee(employees, interview));