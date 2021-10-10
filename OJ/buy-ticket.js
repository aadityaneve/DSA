/* 
    Buy ticket Ended
    Description

    There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

    There are N operations that can be performed on this line. The operations are of following type:

    E x : Integer x enters the queue (For such operation, print the new length of the queue.)

    D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)


    Input
    Input Format :

    First line consists of a single integer denoting N

    Each of the following N lines contain one of the operation as described above.



    Constraints :

    1<=N<=100




    Output
    For each enqueue operation print the new size of the queue.

    And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.


    Sample Input 1 

    5
    E 2
    D
    D
    E 3
    D
    Sample Output 1

    1
    2 0
    -1 0
    1
    3 0
*/








var queue = [];
var count = 0;

function newYearCelebration(operation, element) {
    // console.log("Queue : ",queue);
    // console.log("Stack : ",stack);
    // console.log(typeof operation+":"+typeof element);

    switch (operation) {
        case 'E': // Insert into queue
            queue.push(element);
            console.log(queue.length);
            break;
        case 'D': // Delete form queue
            if (queue.length > 0) {
                console.log(queue[0], queue.length - 1);
                queue.shift();
            } else {
                console.log(-1, queue.length);
            }
            break;

    }
}



function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var [operation, element] = input[++line].trim().split(' ');
        newYearCelebration(operation, element);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
        E 2
        D
        D
        E 3
        D`);
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
    Buy Ticket - Editorial
    Difficulty: Easy
    Prerequisite: Queues.
    Problem statement
    Given a queue Q initially empty. Also given N operations to be performed on Q. Each operation can be of two types, they are :

    E x : Enqueue integer x into Q and print the length of Q.
    D : Dequeue the front of Q. Print the element dequeued along with the length of queue.Note -> If queue and empty and operation of type D appears then, print -1 along with the length of the queue.
    Hint
    Integer that comes first leaves first.

    Short Explanation
    Maintain a queue of integers.
    When query of type 'E' arrives enqueue integer 'X' at the rear of the queue and print its new length. Dequeue the front element 'F', of the queue and print it along with the new length of the queue, when query of type 'D' comes. Take care of the situation when queue is empty.
    Detailed Explanation
    OBSERVATIONS:

    Element entering the sequence of integers first will leave the sequence first. This shows FIFO nature of the sequence.
    Hence, sequence of integers can be maintained as a queue.
    Let Q be the queue of integers having K elements at present state.

    Query of type E x : When these type of queries appear, it means integer 'x' enters the queue of integers. Hence, 'x' will be enqueued at the rear of queue. Hence new size of the queue will be K + 1.
    Query of type D : When these type of queries appear, it asks to remove the oldest element from the queue which is always the front element. Hence if front is removed the new size shrinks to K - 1.

    It should be noted that if queue is empty and query of type D appears, then -1 along with the size of the queue will be printed.

    Pseudo code:

    Queue Q

    S = 0 // Size of queue initially 0.

    N // Number of operations to be performed

    While( N > 0 ){

    query_type // Either E or D

    if( query_type == E ){

        X // Integer to be enqueued
        S = S + 1
        Q.enqueue(X)
        Print(S)
    }

    else{

        if( S == 0 ){
        Print( -1 )
        Print( S )
        }

        else{

        Print( Q.front() )
        Q.dequeue()
        S = S - 1

        Print( S )
        }
    }

    N = N-1
    }
    Example -


    Let N = 5
    Q // Empty queue

    Queries :
    E 2 : Enqueue 2 in Q => Q : [ 2 ] --> Output : 1  ( Print the size of queue after enqueuing 2 )
    D : Dequeue the front of Q => Q : [ ] --> Output : 2 0 ( Print the removed element of the queue and new size of the queue )
    D : Dequeue the front of Q, but Q is empty hence, Output : -1 0
    E 3 : Enqueue 3 to Q => Q : [ 3 ] --> Output : 1
    D : Dequeue the front of Q => Q : [ ] --> Output : 3 0

    Time Complexity:
    $O(1)$.

    Each query requires either enqueue or dequeue operation to be performed which can be done in constant time.

    Space Complexity:
    $O(N)$, where $N$ is the number of operations

    At most $N$ elements can reside inside the queue.

    Alternate Solution:
    None
*/