// const palindromes = function (string) {
//     let lowerCaseString = string.toLowerCase()
//     let splitArr = lowerCaseString.split("");
//     let reversedArr = []
//     let arrMinus = splitArr.length - 1
    
//     for (let i = 0; i < splitArr.length; i++) {
//         reversedArr[i] = splitArr[arrMinus - i]
        
//     }

//     let splitArrString = splitArr.join("")
//     let reversedArrString = reversedArr.join("")

//     if (splitArrString === reversedArrString){
//         return true
//     }else{
//         return false
//     }

// };

const palindromes = function (string) {
    let punctuationClean = string.replace(/\W/g, "")
    let lowerCaseString = punctuationClean.toLowerCase()
    let splitArr = lowerCaseString.split("");
    let reversedArr = []
    let arrMinus = splitArr.length - 1
    
    for (let i = 0; i < splitArr.length; i++) {
        reversedArr[i] = splitArr[arrMinus - i]
        
    }

    let splitArrString = splitArr.join("")
    let reversedArrString = reversedArr.join("")

    if (splitArrString === reversedArrString){
        return true
    }else{
        return false
    }

};











// Do not edit below this line
module.exports = palindromes;
