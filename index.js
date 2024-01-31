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
const moment = require('moment')
setInterval(() => {
    const time = moment().format()
    console.log(`TIme is: ${time})`)
}, 3000);
// console.log(time)




