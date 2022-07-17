// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
function findUniq(arr) {
    let a = []
    let b = []
    for(i=0; i<=arr.length-1; i++){
        if(arr[0] == arr[i]){
            a.push(arr[i])
        } else {
            b.push(arr[i])
        }
    }
    if(a.length == 1){
        console.log(`Unique Number: ${a}`)
    } else {
        console.log(`Unique Number: ${b}`)
    }
}
findUniq([ 0, 0, 0.55, 0, 0 ])
console.log('========')
findUniq([ 1, 0, 0 ])
console.log('========')
findUniq([ 0, 1, 0 ])
console.log('========')
findUniq([ 0, 0, 1 ])
console.log('========')
findUniq([ 1, 1, 1, 2, 1, 1 ])
console.log('========')
findUniq([ 1, 1, 2, 1, 1 ])
console.log('========')
findUniq([ 3, 10, 3, 3, 3 ])