// Core modules
// setTimeout(() => {
//     console.log('Hello world is working');
// }, 4000);

// let count=0
// setInterval(() => {
//     console.log(count++ );
// }, 2000);

// const fs = require('fs');
// const golden = fs.readFileSync('./input.txt', 'utf8');
// console.log(golden)

// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

// fs.writeFileSync('./input.txt', `${golden} \n\t by Mubashshir Ahmad`)
// const new_golden = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_golden)
// External modules
// const moment = require('moment');
// setInterval(() => {
//     const time = moment().format('hh:mm:ss');
//     console.log('time is :', time)
// }, 5000);

// const inquirer = require('inquirer');

// inquirer.prompt([{type: 'input', name: 'raqam', message:'please enter a number'}])
//   .then((answers) => {
//     console.log('the number i inserted : ', answers.raqam)
//   })
// .catch((err) => console.log(err))

// const validator = require('validator');
// const test = validator.isEmail('test@example.com')
// const test1 = validator.isInt('100')
// const test2 = validator.isIP('122.122.122.122')
// console.log(test)
// console.log(test1)
// console.log(test2)

// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log(random)

// const chalk = require('chalk');
// const log = console.log;
// log(chalk.yellow('Hello ') + random + chalk.blue(' world'))

// File modules

// const calculate = require('./calc.js')

// const test1 = calculate.multiply(7,8)
// console.log(test1)

// const test2 = calculate.minus(7,8)
// console.log(test2)

// const test3 = calculate.plus(7,8)
// console.log(test3)

const Account = require('./account.js')
Account.classInfo()
Account.timeIs()

const myAccount = new Account('Umar', 1000000, 31415161718)
myAccount.makeDeposit(40000)

myAccount.withdrawMoney(100000)

myAccount.giveDetails()