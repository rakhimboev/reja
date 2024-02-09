// A-task
console.log('My advices: ')
const list = [
    `Maktabda yaxshi o'qing`,
    `Yaxshi ustoz toping`,
    `IELTS oling`,
    `Suring!!!`,
    `Befoyda, baribir surasiz))))`
]

const advice = (age, callback) => {
    if (typeof age !== 'number') callback('Insert a number', null)
    else if (age <= 10) callback(null, list[0])
    else if (age > 10 && age <= 20) callback(null, list[0])
    else if (age > 20 && age <= 30) callback(null, list[1])
    else if (age > 30 && age <= 40) callback(null, list[2])
    else if (age > 40 && age <= 50) callback(null, list[3])
    else {
        setTimeout(() => {
            callback(null, list[4])
        }, 3000);
    }
}

console.log('passed here 0')
advice(60, (err, data) => {
    if (err) console.log("error: " + err)
    else {
        console.log('javob: ', data)
    }
})


console.log('passed here 1')
