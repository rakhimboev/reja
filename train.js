// I - task
const getCompute = (str) => {
    if (str.length < 2) {
        return str.split('');
    }

    const first = str.charAt(0);
    const rest = str.slice(1);
    return (rest + first).split('');
}


console.log(getCompute('hello'));
console.log(getCompute('world'));


// // F-task
// function findDoublers(str) {
//     for (let i = 0; i < str.length; i++) {
//         const letter = str[i];
//         if (str.lastIndexOf(letter) !== i) {
//             return true;
//         }
//     }
//     return false;
// }

// const str1 = "hello";
// const str2 = "world";
// console.log(findDoublers(str1));
// console.log(findDoublers(str2));


// // E-task
// const reversing = (str) => {
//     return str.split('').reverse().join('');
// }

// const test = reversing('hello')
// console.log(test)




// console.log('Jack Ma maslahatlari: ')
// const list = [
//     'Yaxshi oqing', //0-20
//     'yaxshi dam oling', //20-30
//     'oz ustingizda ishlang', //30-40
//     'ishchilaringiz ustida ishlang', //40-50
//     'boldi endi ee, dam oling' //50
// ]
// const advice = async (a) => {
//     if (typeof a !== 'number') throw new Error('insert number')
//     else if (a <= 20) return list[0]
//     else if (a > 20 && a <= 30) return list[1]
//     else if (a > 30 && a <= 40) return list[2]
//     else if (a > 40 && a <= 50) return list[3]
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[4])
//             }, 5000)
//         })
//     }
// }

// console.log('passed here 0')
// advice(55, (err, data) => {
//     if (err) console.log('error', err)
//     else {
//         console.log('javob: ', data)
//     }
// })
// console.log('passed here 1')

// const run = async () => {
//     let result = await advice(25)
//     console.log(result)
//     result = await advice(70)
//     console.log(result)
//     result = await advice(41)
//     console.log(result)
// }
// run()