const helpers = require('./helpers');
const chalk = require('chalk');

// const name = "Devon";

// console.log(`Hello, ${name} - how are you doing?`);

const age = 3;

// console.log(`I am ${age} years old`);

// const exampleObject = {firstVar: 'Devon', secondVar: 3};

// console.log(exampleObject);
// console.log(typeof exampleObject);

// console.log(`Trying to access firstVar, ${exampleObject.firstVar}`);

// const nameList = ['Devon', 'Sarah', 'Lis'];

// console.log(`First person is; ${nameList[0]}`);

console.log(chalk.red(`I have increased my age by 10; ${helpers.myFunc(age)}`));