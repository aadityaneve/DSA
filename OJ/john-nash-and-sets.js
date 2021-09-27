/* 
    John Nash & Sets Ended
    Description

    John Nash, the famous American Mathematician, is currently working on sets. Apart from being a great Mathematician, he is very particular about the order of numbers.

    Therefore, he wants everything in order. He is going to be working on two sets, but he wants to merge them together, to use his time optimally.

    Therefore, he asks you, his assistant, to merge the two sets, and form a new set, and arrange it in ascending order of numbers.

    The two sets are given in the form of arrays. Merge the two sets, and sort them in ascending order of elements.

    Note that the new sets formed should not contain any duplicate elements

    You have to take the input yourself


    Input
    The first line contains T the number of test cases.

    The first line of each test case contains N, the size of the first set, next line have N space separated integers, denoting the elements of the first set.

    The next line contains M, the size of the second set, and the next line contains M space separated integers denoting the elements of the second set.

    Constraints

    1 <=T<= 10

    1 <=N,M<= 10^4

    -10^4 <=A[I]<= 10^4


    Output
    Print the set formed by merging the two sets together in sorted format

    Sample Input 1 

    1
    4
    1 2 3 4
    5
    1 2 3 4 5
    Sample Output 1

    1 2 3 4 5 
    Hint

    In the sample test case, the first array is1 2 3 4, while the second array is1 2 3 4 5

    After merging the two arrays become,1 1 2 2 3 3 4 4 5

    After removing the duplicates, the arrays become1 2 3 4 5, which is the required answer
*/

function johnNashAndSets(arr1, size1, arr2, size2){
    
    var object = {};

    for(let i=0;i<Math.max(arr1.length,arr2.length);i++){
        object[arr1[i]] = i;
        object[arr2[i]] = i;
    }
    // console.log(Object.keys(object))
    var arr = [];
    for(key in object){
        if(key !== 'undefined'){
            // console.log(key);
            arr.push(key);
        }        
    }
    console.log(arr.sort((a,b) => a-b).join(' '));
}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++){
        var size1 = +input[++line];
        var arr1 = input[++line].trim().split(' ').map(Number);
        var size2 = +input[++line];
        var arr2 = input[++line].trim().split(' ').map(Number);
        johnNashAndSets(arr1, size1, arr2, size2);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    4
    1 2 3 4
    5
    1 2 3 4 5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}