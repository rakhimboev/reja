// A-task
console.log('My advices: ')
const list = [
    `Maktabda yaxshi o'qing`,
    `Yaxshi ustoz toping`,
    `IELTS oling`,
    `Suring!!!`,
    `Befoyda, baribir surasiz))))`
]

const advice = async (age, callback) => {
    if (typeof age !== 'number') throw new Error('Insert a number')
    else if (age <= 10) return list[0]
    else if (age > 10 && age <= 20) return list[1]
    else if (age > 20 && age <= 30) return list[2]
    else if (age > 30 && age <= 40) return list[3]
    else if (age > 40 && age <= 50) return list[0]
    else {
        return list[4]
        // setTimeout(() => {
        //     callback(null, list[4])
        // }, 3000);
    }
}

// console.log('passed here 0')
// advice(60)
//     .then(data => {
//         console.log('javob: ', data)
//     }).catch((err) => {
//         console.log('error: ' + err)
//     })


// console.log('passed here 1')

const run = async () => { 
    let javob = await advice(22)
    console.log(javob)
    javob = await advice(32)
    console.log(javob)
    javob = await advice(55)
    console.log(javob)

}
run()
