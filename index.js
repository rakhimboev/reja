// Core Module packages

// let num = 0
// setInterval(() => {
//     num++
//     // console.log('Count: ', num)
// }, 300);

// const fs = require('fs')
// const data = fs.readFileSync('./input.txt', 'utf8')
// console.log(data)

// fs.writeFileSync('./input.txt', `${data} \n\t by Developer`)
// const dataa = fs.readFileSync('./input.txt', 'utf8')
// console.log(dataa)

// External module package
// const moment = require('moment')
// setInterval(() => {
//     const time = moment().format()
//     console.log(`TIme is: ${time})`)
// }, 3000);

// const inquirer = require('inquirer');
// inquirer
//     .prompt([{type: 'input', name:'raqam', message: 'Enter a number: '}])
//     .then((answer) => {
//         console.log('The entered number is: ' + answer.raqam)
//     })
//     .catch((err) => console.log(err))

// const validator = require('validator');
// const test =  validator.isEmail('foo@bar.com')
// console.log(test)
// const test2 = validator.isInt('9B')
// console.log(test2)

// const calculate = require('./hisob.js')

// const natija = calculate.kopaytirish(100, 20)
// console.log(natija)

const Account = require('./account.js')
const myAccount = new Account('Umar', 10000, 78455547854478)
myAccount.myBalance()
console.log('~~~~~~~~~~~~~~~~~~')

myAccount.deposit(10000)
console.log('~~~~~~~~~~~~~~~~~~')

myAccount.withdraw(2000)

console.log('~~~~~~~~~~~~~~~~~~')

myAccount.myBalance()
console.log('~~~~~~~~~~~~~~~~~~')