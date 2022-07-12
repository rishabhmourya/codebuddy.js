// level {2}
function removeEven(arr) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 !== 0){
            result.push(arr[index]) 
        }
    }
    return result
}
console.log(removeEven([1, 3, 4, 6, 7, 8]))


function replaceVowels(string) {
    let newStr = ""
    let allVowels = {
        'a':1,
        'e':1,
        'i':1,
        'o':1,
        'u':1
    }
    for (let index = 0; index < string.length; index++) {
        let element = string[index];
        element = element.toLowerCase()
        if(allVowels.hasOwnProperty(element)){
            newStr += element.toUpperCase()
        }else{
            newStr += element

        }
    }
    return newStr
}

console.log(replaceVowels('Elie'))
function  findMax(arr) {
    let num = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > num){
            num = arr[index]
        }
    }
    return num
}

console.log(findMax( [1, 3, 4, 6, 7, 200, 2, 5]))