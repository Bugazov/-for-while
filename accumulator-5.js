let arr = [1,3,5,4,22,44,11,8,19,12];
let accumulatorEven =[];
for(let i = 0;i < arr.length; i++){
    if(arr[i] % 2 == 0){
        accumulatorEven.push(arr[i])
}
}
console.log(accumulatorEven)