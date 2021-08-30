/* Given an array of n elements, Find duplicate in an array */

var arr = [-1,6, 8, 1, -2,-5, 4, 0, 2, 0,-1,-7,-4,5,-10];

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] == arr[j]){
            console.log(`Duplicate of ${arr[i]} found on index no. ${j+1}`);
        }
    }
}

