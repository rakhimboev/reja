// // // A-task

// // const countLetter = (letter, word) => {
// //     let list = word.split('');

// //     let count = 0;
// //     for (let i = 0; i < list.length; i++) {
// //         if (list[i] === letter) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // let result = countLetter("e", "engineer");
// // console.log(result);

// // result = countLetter("t", "letterett");
// // console.log(result);

// // // B- task
// // function countDigits(word) {
// //     let count = word.match(/\d/g);

// //     return count.length
// // }

// // let result = countDigits("ad2a54y79wet0sfgb9");
// // console.log(result);
// // console.log(countDigits('taqisrni raqami: 777-1777'))

// // D-task

// function checkContent(word1, word2) {
//     let list1 = word1.split('').sort().join('');
//     let list2 = word2.split('').sort().join('');

//     console.log(list1 === list2);
// }

// checkContent("mitgroup", "gmtiprou");
// checkContent('true', 'rute')


// // e task
// const getReverse = (word) => {
//     let characters = word.split('').reverse().join('');
//     console.log(characters);
// }

// getReverse("hello")
// getReverse("olleh")

// // Unuxo7RTmDmZZCmQ


// f- taskchik
function double(word) {
    for (var i = 0; i < word.length; i++) {
        for (var j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
                return true;
            }
        }
    }
    return false;
}


let result = double("hello");
console.log(result); 
result = double('mamuriyat')
console.log(result); 
result = double('tarix')
console.log(result); 







// // console.log('My advices: ')
// // const list = [
// //     `Maktabda yaxshi o'qing`,
// //     `Yaxshi ustoz toping`,
// //     `IELTS oling`,
// //     `Suring!!!`,
// //     `Befoyda, baribir surasiz))))`
// // ]

// // const advice = async (age, callback) => {
// //     if (typeof age !== 'number') throw new Error('Insert a number')
// //     else if (age <= 10) return list[0]
// //     else if (age > 10 && age <= 20) return list[1]
// //     else if (age > 20 && age <= 30) return list[2]
// //     else if (age > 30 && age <= 40) return list[3]
// //     else if (age > 40 && age <= 50) return list[0]
// //     else {
// //         return list[4]
// //         // setTimeout(() => {
// //         //     callback(null, list[4])
// //         // }, 3000);
// //     }
// // }

// // // console.log('passed here 0')
// // // advice(60)
// // //     .then(data => {
// // //         console.log('javob: ', data)
// // //     }).catch((err) => {
// // //         console.log('error: ' + err)
// // //     })

// // // console.log('passed here 1')

// // const run = async () => {
// //     let javob = await advice(22)
// //     console.log(javob)
// //     javob = await advice(32)
// //     console.log(javob)
// //     javob = await advice(55)
// //     console.log(javob)

// // }
// // run()
// // run()
// >>>>>>> 911f464bad98900a41d4a7421462759a832dff13
