console.log('Jack Ma maslahatlari: ')
const list = [
    'Yaxshi oqing', //0-20
    'yaxshi dam oling', //20-30
    'oz ustingizda ishlang', //30-40
    'ishchilaringiz ustida ishlang', //40-50
    'boldi endi ee, dam oling' //50
]

const advice = (a, callBack) => {
    if (typeof a !== 'number') callBack('insert number', null)
    else if (a <= 20) callBack(null, list[0])
    else if (a > 20 && a <= 30) callBack(null, list[1])
    else if (a > 30 && a <= 40) callBack(null, list[2])
    else if (a > 40 && a <= 50) callBack(null, list[3])
    else {
        setTimeout(() => {
            callBack(null, list[4])
        }, 5000)
    }
}

console.log('passed here 0')
advice(55, (err, data) => {
    if (err) console.log('error', err)
    else {
        console.log('javob: ', data)
    }
})
console.log('passed here 1')
