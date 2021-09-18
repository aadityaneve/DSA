/* 
    Find Pairs -6321:49:11
    Description

    You are given an array stored in a variable with the namearr

    The size of the array is stored in a variable with the nameN

    You are also given another number stored in a variable with the nameM

    You have to find the count of pair of distinct elements in the array, whose product is equal to the value stored inM

    For example, consider the value stored inN = 5,M = 4, andarr = [3 2 2 1 5]. Therefore, in this case the output will be 1, since there is one pair, elements stored at index1,2have their product equals toM = 4


    Input
    There are multiple test case within each test case, but they are handled by the backend. You just have to complete the function given

    The first line of the input contains the values stored inNandM

    The next line of the input contains the values stored inarr


    Output
    Print the count of pairs of distinct elements such that their product is equal to the values stored inM

    Sample Input 1 

    2
    3 0
    1 3 2
    5 4
    3 2 2 1 5
    Sample Output 1

    0
    1
    Hint

    In the first sample test case, the value stored inN = 3, andM = 0, while thearr = [1 3 2]. There are no pairs in the array whose product isM = 0. Therefore, the required output will be 0

    In the second test case, the value stored inN = 5,M = 4, andarr = [3 2 2 1 5]. Therefore, in this case the output will be 1, since there is one pair, elements stored at index1,2have their product equals toM = 4
*/

function findPairs(arr, size, M){

    var count = 0;

    for(let i=0;i<size;i++){
        for(let j=i+1;j<size;j++){     
            if(arr[i]*arr[j] == M){
                count++;
            }            
        }
    }
    console.log(count);
}


function runProgram(input) {
    input = input.trim().split('\n');
    var lines = 0;
    for(let i=0;i<+input[0];i++){
        var [size, M] = input[++lines].trim().split(' ').map(Number);
        var arr = input[++lines].trim().split(' ').map(Number);
        // console.log(arr);
        findPairs(arr, size, M);
    }    
}
if (process.env.USERNAME === "aneve") {
    runProgram(`2
    3 0
    1 3 2
    5 4
    3 2 2 1 5`);
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