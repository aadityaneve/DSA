/* 
    Masai Restaurant Ended
    Description

    You love food. Hence, you took up position of a manager at Masai restaurant that serves people with delicious food packages. It is a very famous place and people are always queuing up to have one of those packages. Each package has a cost associated with it. The packages are kept as a pile. The job of a manager is very difficult. You need to handle two types of queries:

    1) Customer Query:

    When a customer demands a package, the food package on the top of the pile is given and the customer is charged according to the cost of the package. This reduces the height of the pile by 1.

    In case the pile is empty, the customer goes away empty-handed.

    2) Chef Query:

    The chef prepares a food package and adds it on top of the pile. And reports the cost of the package to the Manager.

    Help him manage the process.


    Input
    Input Format:

    First line contains an integer Q, the number of queries. Next Q lines follow.

    A Type-1 ( Customer) Query, is indicated by a single integer 1 in the line.

    A Type-2 ( Chef) Query, is indicated by two space separated integers 2 and C (cost of the package prepared) .

    Constraints :

    Q<100

    C<1000


    Output
    For each Type-1 Query, output the price that customer has to pay i.e. cost of the package given to the customer in a new line. If the pile is empty, print "No Food" (without quotes).


    Sample Input 1 

    6
    1
    2 5
    2 7
    2 9
    1
    1
    Sample Output 1

    No Food
    9
    7
*/

var stack = [];
var top = -1;

function masaiRestaurant(operation, data, size) {

    var stackSize = size;

    switch (operation){
        case 2: //push()
                if(top == stackSize-1){
                    console.log('Overflow');
                }else{
                    top++;
                    stack[top] = data;
                    stackSize++;
                }
                break;
        case 1: //pop()
                if(top == -1){
                    console.log('No Food');
                }else{
                    var ans = stack[top];
                    top--;
                    console.log(ans);
                }
                break;
    }

}


    function runProgram(input) {

        input = input.trim().split('\n');
        var size = +input[0];
        var line = 0;
        for (let i = 0; i < +input[0]; i++) {
            if (input[++line] != 1) {
                var [operation, data] = input[line].trim().split(' ').map(Number);
            } else {
                var operation = +input[line].trim();
            }
            masaiRestaurant(operation, data, size);
        }
    }
    if (process.env.USERNAME === "aneve") {
        runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1`);
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