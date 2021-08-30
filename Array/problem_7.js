/* Given an array of n elements, Move all the negative elements to one side of the array */

var arr = [-1,6, 8, 1, -2,-5, 4, 0, 2,-1,-7,-4,5,-10];

var newArr = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        newArr.unshift(arr[i]);
    }else if(arr[i]>=0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);