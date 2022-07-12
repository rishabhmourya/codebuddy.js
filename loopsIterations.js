// level {2}
function giveFibonacci(num) {
 let result = []
 for (let index = 1; index <= num; index++) {
    if(index === 1){
        result.push(0)
    }else if(index === 2){
        result.push(1)
    }else{
        let cur = result[index-2]
        let pre = result[index-3]
        result.push(cur+pre)
        
    }
 }
 return result
}
console.log(giveFibonacci(7))

