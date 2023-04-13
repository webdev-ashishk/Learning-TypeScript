//--------First Example---------------->
// // const n: number = 10;
// const n = 10;

// function cal(num1: number, num2: number) {
//   return num1 + num2;
// }
// console.log(cal(n, 20));

//--------second Example- timestamp: 22:20sec--------------->
//There is two way of defining
//1]type numbers: number[]
//1]type numbers in generics way: Array<number>
//NOTE: typescript can be used for developement not for productin level
// function getTotal(numbers: number[]) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }
// console.log(getTotal([10, 20, 30]));

//--------third Example- timestamp: 30min:20sec--------------->

const user = {
  fname: "ashish",
  branch: "cs",
  role: "softwareEngineer",
};

console.log(user.fname);
