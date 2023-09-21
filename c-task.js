const checkSimilarity = (str1,str2) => {
    const sortStr1 = str1.split('').sort().join();
    const sortStr2 = str2.split('').sort().join();
    return sortStr1 === sortStr2
}

const test = checkSimilarity('apple', 'elppa')
console.log(test)
const test1 = checkSimilarity('olma', 'mola')
console.log(test1)