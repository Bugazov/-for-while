let arr = [1,3,23,4,5,12,-7,-8,-77,21,11,-2];
let i = 0;
let accumulator = 0
while(i < arr.length){
    if(arr[i] > 0 ){
        accumulator= accumulator + arr[i]
    }
    i++
}
console.log(accumulator)