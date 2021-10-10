/* 
    New Year Celebration -2:25:5
    Description

    New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

    On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

    She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

    Query types:

    1 X : Number X enter the Queue.

    2 X : Number X enter the Stack.

    3: Output whoever is in-front of the queue.

    4: Output whoever is on-top of the stack

    5: Which person is in-front of queue get out of queue and enters the stack.

    Note: If the Queue or Stack is empty then output "-1"


    Input
    Input Format :

    The first line of input will contain Q, which is the number queries.

    The next Q lines will different queries based upon query types given.



    Constraints :

    1<=Q<=10^5

    1<=X<=10^9


    Output
    Output will consist of integers based upon Query types.If Query type is 3 then Output whoever is in-front of the queue, if Query type is 4 Output whoever is on-top of the stack.


    Sample Input 1 

    7
    1 4
    2 3
    1 2
    3
    4
    5
    4
    Sample Output 1

    4
    3
    4
*/

var stack = [];
var queue = [];
var front = 0;
var rear = -1;


function enqueue(element) {
    if (rear == queue.length) {
        console.log("Overflow");
    } else {
        rear++;
        queue[rear] = element;
    }
}

function dequeue() {
    if (front == rear) {
        console.log(-1);
    } else {
        let item = queue[front];
        queue.shift();
        return item;
    }
}


function newYearCelebration(operation, element) {    

    switch (operation) {
        case 1: // Insert into queue
            enqueue(element);
            break;
        case 2: // Insert into stack
            stack.push(element);
            break;
        case 3: // Return front element of queue
            if (queue.length == 0) {
                console.log(-1);
            } else {
                console.log(queue[front]);
            }
            break;
        case 4: // Return top element of the stackṇ
            if (stack.length == 0) {
                console.log(-1);
            } else {
                console.log(stack[stack.length - 1]);
            }
            break;
        case 5: // Remove front element from queue and insert into stack
            if (stack.length >= 0 && queue.length > 0) {
                stack[stack.length] = dequeue();
            }
            if (queue.length == 0) {
                console.log(-1);
            }
            if (stack.length == 0) {
                console.log(-1);
            }
            break;
    }    
}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var [operation, element] = input[++line].trim().split(' ').map(Number);
        newYearCelebration(operation, element);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`11
    1 4
    2 3
    1 2
    3
    4
    5
    4
    5
    5
    5
    5`);
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
    New year celebration - Editorial
    Difficulty: Easy
    Prerequisite: Stacks, Queues.
    Problem statement
    Given a stack 's' and a queue 'q'. Given Q queries to be performed of the following types :

    1 X : Insert X into q
    2 X : Insert X into s
    3 : Print the front of 'q'
    4 : Print the top of 's'
    5 : Remove the front of 'q' and push it into 's'.
    Hint
    None

    Short Explanation
    Maintain a stack as well as a queue.
    When query of type 1 appears then, enqueue number X into the queue.
    When query of type 2 appears then, push number X into the stack.
    For query of type 3, print the front of the queue.
    For query of type 4, print the top of stack.
    For query of type 5, dequeue the front of queue and push it to stack.
    Care should be taken when either of queue or stack is empty.

    Detailed Explanation
    Basic queue operations :

    Enqueue --> Add an element at the rear of queue.Dequeue --> Remove an element from the front of queue.

    Basic Stack operations :

    Push --> Add an element at the top of stack.Pop --> Remove an element from the top of stack.

    Let S and Q be the required Stack and Queue respectively.

    Given 5 type of queries :

    Type --> 1 X : Enqueue number X into Q.Type --> 2 X : Push number X into S.Type --> 3 : Perform Dequeue operation on Q.Type --> 4 : Perform pop operation on S.Type --> 5 : Dequeue the front of Q and push it to the top of S.

    Pseudo code:


    Stack S

    Queue Que

    Q // Number of queries

    While( Q > 0 ){

    query_type

    if( query_type == 1 ){

        X // required number
        Que.enqueue(X)

    }

    else if( query_type == 2 ){

        X // required number
        S.push(X)

    } 

    else if( query_type == 3 ){
        if(Que is not empty )
            Print(Que.front())
        else
            Print(-1)
    }

    else if( query_type == 4 ){
        If(S is not empty)
            Print(S.top())
        else
            Print(-1)
    }

    else{
        if( Que is not empty ){
            Z = Que.front()
            S.push(Z)
            Que.dequeue()
        }
    }

    Q = Q - 1
    }          
    Example -


    Let Q = 7
    S // Empty stack
    Que // Empty queue

    Queries :
    1 4 : Enqueue 4 into Que --> Que : [ 4 ] 
    2 3 : Push 3 into S --> S : [ 3 ].
    1 2 : Enqueue 2 into Que --> Que : [ 4 2 ].
    3 : Print the front of Que --> Output : 4
    4 : Print the top of S --> Output : 3
    5 : Dequeue the front of Que and push it to S --> Que : [ 2 ], S : [ 3 4 ]
    4 : Print the front of Que --> Output : 2

    Time Complexity:
    $O(1)$.

    Each query requires either enqueue, dequeue, push or pop operations to be performed which can be done in constant time.

    Space Complexity:
    $O(Q)$, where $Q$ is the number of operations

    At most $Q$ elements can reside inside the stack and queue combined.

    Alternate Solution:
    None
*/