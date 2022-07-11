let arr = [1,3,5,4,22,44,11,8,19,12];
let accumulatorOdd =[];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !==0){
        accumulatorOdd.push(arr[i])
    }
}
console.log(accumulatorOdd)