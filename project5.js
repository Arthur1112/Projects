//Function that when given an array of number will return the sum of all the numbers


function sumOfArrays(arr){
    let sum = 0;
    for(i=0; i<arr.length; i++){
    sum = sum + arr[i]
} return sum
}
let arrayOne = [5,6,5,23,2,7,9,86]
console.log(sumOfArrays(arrayOne))