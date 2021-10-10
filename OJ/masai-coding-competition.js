/* 
    Masai Coding Competition Ended
    Description

    There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.

    There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

    E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

    D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue


    Input
    Input Format :

    First line contains an integer Q denoting the number of operations.

    Next Q lines will contains one of the 2 types of operations.



    Constraints :

    Number of dequeue operations will never be greater than enqueue operations at any point of time.

    1<=Q<=100000

    1<=a<=4

    1<=b<=50000


    Output
    For each 2nd (D) type of operation, print two space separated integers, the front student's club and roll number.


    Sample Input 1 

    5
    E 1 1
    E 2 1
    E 1 2
    D
    D
    Sample Output 1

    1 1
    1 2
    Hint

    Explanation :

    E 1 1( This meansE club_Number roll_Number)

    The 2 types of operations are :

    E club_Number roll_Numbe:Insert in the queue
    If the same club member already present in the queue, then insert the new entry  next to that
    Otherwise, Insert at the last
    D:Print and Remove the front of the queue


    Test Case Explanation :

    E 1 1     ===>  Insert in the Queue = [ (1,1) ]

    E 2 1    ===>   Since Club Member 2 is not present in the queue, Then in this case , insert this entry in last  Queue = [(1,1) , (2,1) ]

    E 1 2    ===>   Since Club Member 1 is already present, In this case insert the entry next to it Queue =[(1,1) , (1,2) ,(2,1) ]

    D         ====>  Remove Front of queue and print  (1,1)  Now, Queue = [(1,2) ,(2,1) ]

    D         ====>Remove Front of queue and print  (1,2)  Now, Queue = [(2,1) ]



    Thus Final Output is :

    (1,1)

    (1,2)
*/




var flag1 = false, flag2 = false, flag3 = false, flag4 = false;
var master = [], queue1 = [], queue2 = [], queue3 = [], queue4 = [];

function enqueue(queue, element) {
    queue.push(element);
}

function dequeue(queue) {
    return queue.shift();
}

function isEmpty(queue) {
    return queue.length > 0 ? false : true;
}


function newYearCelebration(operation, clubNumber, rollNumber) {
    // console.log(operation, element1+"-"+element2);

    switch (operation) {
        case 'E': // Insert into queue
            if (clubNumber == 1) {
                if (flag1 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue1, rollNumber);
                    flag1 = true;
                } else {
                    enqueue(queue1, rollNumber);
                }
            } else if (clubNumber == 2) {
                if (flag2 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue2, rollNumber);
                    flag2 = true;
                } else {
                    enqueue(queue2, rollNumber);
                }
            } else if (clubNumber == 3) {
                if (flag3 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue3, rollNumber);
                    flag3 = true;
                } else {
                    enqueue(queue3, rollNumber);
                }
            } else if (clubNumber == 4) {
                if (flag4 == false) {
                    enqueue(master, clubNumber);
                    enqueue(queue4, rollNumber);
                    flag4 = true;
                } else {
                    enqueue(queue4, rollNumber);
                }
            }
            break;
        case 'D': // Delete form queue
            let string = "";
            if (master[0] == 1) {
                if(!isEmpty(queue1)){
                    string += master[0] + " " + dequeue(queue1);
                }
                if(isEmpty(queue1)){
                    dequeue(master);
                    flag1 = false;
                }
                console.log(string);
            } else if (master[0] == 2) {
                if(!isEmpty(queue2)){
                    string += master[0] + " " + dequeue(queue2);
                }
                if(isEmpty(queue2)){
                    dequeue(master);
                    flag2 = false;
                }
                console.log(string);
            } else if (master[0] == 3) {
                if(!isEmpty(queue3)){
                    string += master[0] + " " + dequeue(queue3);
                }
                if(isEmpty(queue3)){
                    dequeue(master);
                    flag3 = false;
                }
                console.log(string);
            } else if (master[0] == 4) {
                if(!isEmpty(queue4)){
                    string += master[0] + " " + dequeue(queue4);
                }
                if(isEmpty(queue4)){
                    dequeue(master);
                    flag4 = false;
                }
                console.log(string);
            }

            break;

    }
    // console.log("Master:", master);
    // console.log("Queue1:", queue1);
    // console.log("Queue2:", queue2);
    // console.log("Queue3", queue3);
    // console.log("Queue4", queue4);
    // console.log("******************");
}



function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var [operation, element1, element2] = input[++line].trim().split(' ');
        newYearCelebration(operation, element1, element2);
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`15
    3 E 1
    D
    E 3 1
    E 3 2
    E 2 1
    D
    D
    E 1 1
    E 1 2
    E 4 1
    D
    D
    D
    D
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
    Masai coding competition - Editorial
    Difficulty: Medium
    Prerequisite: Queues.
    Problem statement
    Let Q be a queue initially empty. Given two queries of the following types :

    E a b : If any element of type 'a' is already present in the Q then insert integer 'b' at the end of all elements of type 'a'. Else insert 'b' at the end of Q.
    D : Print the front of Q.
    Hint
    Think in terms of 4 queues.

    Short Explanation
    Maintain a queue for each team 1, 2, 3 and, 4. Let the front of the original queue lies with team 1 at present. Hence pop the front of the queue from team 1 till it is not empty. If it gets empty search for a non empty team with a team member having least time of appearance and shift the front of original queue to that team.Care should be taken when all queues are empty.
    Detailed Explanation
    Imagine that entire queue of players are divided into 4 queues having team members of clubs 1, 2, 3 and, 4 respectively. Each team member has an additional attribute T --> time or arrival along with roll number.

    OBSERVATIONS:

    Front member of all teams has arrived at the earliest time.
    Front of the original queue lies with the team having the least value of T of it's respective front member.
    Front will not shift from the team having it till the time it is not empty.
    For each query of type E a b : Enqueue the team member 'b' into queue of team 'a'.

    For each query of type D : Dequeue the front of the team where current front of the queue lies. This will fetch the front of the original queue.
    If team having the front becomes empty, search for all non empty teams and, shift the front of the queue to that team having the least time of arrival of front member.

    It should be noted that if all teams are empty the front of the original queue points no where.

    Pseudo code:

    Queue Q1,Q2,Q3,Q4 // Queues from teams 1, 2, 3 and 4.

    T = 0 //Time of arrival
    Q // Number of queries
    F = -1 // Front of the queue

    While( Q > 0 ){

    query_type // Either E or D

    if( query_type == E ){

        a, b
        T = T + 1

        if(a == 1 ){
            Q1.enqueue({b, T } ) //  Enqueuing the respective team with a team member having two attributes : Roll number --> b and Time of arrival --> T

        else if(a == 2 )
            Q2.enqueue({b, T } )

        else if(a == 3 )
            Q3.enqueue({b, T } )
        else
            Q4.enqueue({b, T } )

        if( F == -1 ) // If all queues are empty moving the front to team 'a'
        F = a       
    } 

    else{

        Print( F, " " )

        if( F == 1 ){

            Print( Q1.front())
            Q1.dequeue()

            if( Q1 is empty ) {

            check for all other teams ( Q2, Q3, Q4 ) :

                if( front member of Q2 arrives earliest)
                    F = 2
                else if( front member of Q3 arrives earliest )
                    F = 3
                else if(  front member of Q4 arrives earliest )
                    F = 4
                else
                    F = -1
            }

        }

        Similarly check for conditions where F = 2, 3 or 4. 

    }

    Q = Q-1
    }          
    Time Complexity:
    $O(1)$.

    Each query requires either enqueue or dequeue operation to be performed which can be done in constant time.

    Space Complexity:
    $O(Q)$, where $Q$ is the number of operations

    At most $Q$ elements can reside inside the original queue.

    Alternate Solution:
    None
*/