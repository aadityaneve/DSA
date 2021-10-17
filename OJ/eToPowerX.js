/* 
    EtopowerX -0:28:25
    Description

    One famous series says

    Image

    Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

    Image


    Input
    Input Format

    First and the only line of code contains x and n respectively

    Constraints

    x <= 14

    n <= 12


    Output
    Print the value to 4 places after the decimal. For example, 13.1310 is a valid answer but 13.131 is not. Also, 12 is not a valid answer but 12.0000 is a valid answer


    Sample Input 1 

    4 2
    Sample Output 1

    13.0000
*/

function eToPowerX(e, n) {

    function getFactorialOf(number) {

        if (number == 0 || number == 1) {
            return 1;
        }
        return number * getFactorialOf(number - 1);
    }

    function getAns(e, n) {

        if (n == 0) {
            return 1;
        } else {
            return ((1 / getFactorialOf(n)) * (e ** n)) + getAns(e, n - 1);
        }
    }
    console.log(getAns(e, n).toFixed(4));
}

function runProgram(input) {

    var [e, n] = input.trim().split(' ').map(Number);
    eToPowerX(e, n);

}
if (process.env.USERNAME === "aneve") {
    runProgram(`4 2`);
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











/* 
    EtopowerX - Editorial
    Difficulty: Mid
    Prerequisite: Recursion, Math
    Problem Statement:
    One famous series sayscheckhereUsing the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

    T(x) = 1 + x + x^2/2! + x^3/3! +......... +x^n/n!  
    Hint:
    The factorial of 0 and 1 is 1.

    Short Explaination
    For this problem, firsly, we need to calculate the factorial of a number. The factorial of a number N,can be calculated by finding the product of all the numbers from 1 to n. Recursively, the factorial of a number N, can be calculated as the fact(n-1) multiplied by the number N. After finding the functions, a recursive function can be made such that, the stopping condition occurs when the value of r becomes 0. Finally, the answer should be summed at each recursive call, and printed.

    Detailed Explanation:
    Factorial refers to the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24. It is denoted by the '!' sign. This question can be divided into certain parts, such that one part finds the factorial of a number, while the other function recursively finds the value of the required expression. Factorial of a number can be calculated, by making a recursive function such that the, factorial of a number N can be made by finding the factorial can be found by finding the factorial of N-1, by multiplying with the value of N. Similarly, another recursive function, which calculates the function of the expression. The stopping criteria occurs when r is equal to 0, that is the power of the expression becomes 0. Data types must be choosen carefully as, using integer values will give incorrect results. r denotes the power at a particluar instance in the expression.

    Pseudo Code

        * x //value of x in the expression
        * n //value of power in the function
        * r = n
        * function rec(x,r)
            * if (r==0) return 1
            * val = Power(x,r) //function returns the power of the funtion
            * ans = val/factorial(r) + rec(x,r-1) // factorial funtion returns the factorial of a number
            * return ans
        * print (ans)
    Time Complexity:
    N recursive calls will be made by the function, therefore the time complexity is O(N);

    Space Complexity:
    No extra space is required therefore space complexity will be O(1).

    Alternate Solution:
    An iterative method can be thought of but the question prohibits that.
*/