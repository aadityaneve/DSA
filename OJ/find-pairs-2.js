/* 
    Find Pairs 2 -6320:49:12
    Description

    You are given an array stored in a variable with the namearr

    The size of the array is stored in a variable with the nameN

    You are also given another number stored in a variable with the nameM

    You have to find the count of pair of distinct elements in the array, whose sum is divisible by the value stored inM

    For example, consider the value stored inN = 5,M = 4, andarr = [3 2 2 1 5]. Therefore, in this case the output will be 3, since there are three pairs, whose sum is divisible byM = 4. Given below are the three pairs

    3 + 1 = 4 (Elements stored at index 0 and 3)

    2 + 2 = 4 (Elements stored at index 1 and 2)

    3 + 5 = 8 (Elements stored at index 0 and 4)
    Therefore, the required output is3


    Input
    There are multiple test case within each test case, but they are handled by the backend. You just have to complete the function given

    The first line of the input contains the values stored inNandM

    The next line of the input contains the values stored inarr


    Output
    Print the count of pairs of distinct elements, whose sum is divisible to the value stored inM

    Sample Input 1 

    2
    3 2
    1 3 2
    5 4
    3 2 2 1 5
    Sample Output 1

    1
    3
    Hint

    In the first sample test case, the values stored inN = 3,M = 2, andarr = [1 3 2]. Therefore, only 1 pair has a sum divisible byM = 2, which is1 + 3. Therefore, the output is 1

    In the second test case, the value stored inN = 5,M = 4, andarr = [3 2 2 1 5]. Therefore, in this case the output will be 3, since there are three pairs, whose sum is divisible byM = 4. Given below are the three pairs

    3 + 1 = 4 (Elements stored at index 0 and 3)

    2 + 2 = 4 (Elements stored at index 1 and 2)

    3 + 5 = 8 (Elements stored at index 0 and 4)
    Therefore, the required output is3
*/

function findPairs(arr, size, M){

    var count = 0;

    for(let i=0;i<size;i++){
        for(let j=i+1;j<size;j++){
            // console.log(arr[i]+":"+arr[j]);
            if((arr[i]+arr[j]) % M == 0){
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
    3 2
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