/* 
    Description

    You are visiting a friend at her housewarming party. When you arrive at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, and since there aren't many gift shops nearby, most of them end up buying the same gift for her. As more and more people keep joining the queue, you are curious to find the first unique gift in the line. You sit and examine the row after a new person arrives; when he does, you examine the queue from front to back to find out which is the first different gift and add it to your list.

    Note-If after a new person arrives no gift is unique in the queue add '#' to the output


    Input
    The first line contains the number of test cases (t)

    The next t lines contains a string of alphabets arranged randomly, each alphabet represents a unique gift.


    1 <= length of the string <= 20

    1<=t<=10000


    Output
    You have to output t stringsafter processing the stream of lowercase alphabets from the input strings


    Sample Input 1 

    2
    abadbc
    abcabc
    Sample Output 1

    aabbdd
    aaabc#
    Hint

    For the first test case-

    The first person brings gift 'a,' and since it's the first gift, it's unique, so add 'a' to the output. The 2nd person gets 'b' which is unique but still not the first unique gift in the queue, adding 'a' to the output. 3rd person brought 'a' again, and now the first unique gift becomes 'b', so adding it to the output. This process continues until the last person joins the queue.
*/

var map = {};
var queue = [];
var ans = [];

function enqueue(element) {
    queue.push(element);
}

function dequeue() {
    queue.shift();
}

function uniqueGift(string) {

    // console.log(map);
    // console.log(string);
    queue = [];
    ans = [];
    for (let i = 0; i < string.length; i++) {
        enqueue(string[i]);
        map[string[i]] = map[string[i]] + 1;
        if (map[queue[0]] <= 1) {
            // Element is unique
            ans.push(queue[0]);
        } else {
            while (queue.length != 0 && map[queue[0]] >= 2) {
                dequeue();
            }

            if (queue.length == 0) {
                ans.push('#');
            }else{
                ans.push(queue[0]);
            }
        }
        // console.log(queue);
    }
    // console.log("Queue:", queue);
    // console.log("Map:", map);
    // console.log("Ans:", ans);
    console.log(ans.join(''));
}


function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        let string = input[++line].trim();
        // Storing string elements into map
        for (let i = 0; i < string.length; i++) {
            map[string[i]] = 0;
        }
        // Passing string to function
        uniqueGift(string);
    }
}
if (process.env.USERNAME === "aneve") {
    runProgram(`1
    aabcbd`);
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
    Unique Gift - Editorial
    Difficulty: Low
    Prerequisite:Queues)
    Problem Statement:
    Given a string of characters, print the first unique character you find as you transverse the string.

    Hint:
    You can use sets and queues to keep track of the repeated characters.

    Short Explanation:
    Queue can be used to find the first of the unrepeated characters. Transverse the string and find if the character is already there, if not append it to the queue. Use the set to keep track of the repeated characters.

    Detailed Explanation:
    We will use 2 sets in this question (Since there are no repeated items in a set). One to keep track of the visited characters and other to keep track of the repeated characters. If a character is encountered first time add it to the visited set and the queue.

    If the character is already visited add it to the repeated set and remove it from the queue.

    At the end of each iteration print either the first item in the queue or '#' if it's empty.

    Pseudo Code
    function uniqueGift(a){
            hash = [26]; //array of size 26
            Queue q = []
            str = "";
            for (i=0;i<a.length();i++){
                q.enqueue(a.charAt(i));
                temp = a.charAt(i) - 'a';
                hash[temp] = hash[temp] + 1;
                while(!q.isEmpty()){
                    if (hash[q.peek() - 'a'] > 1) q.dequeue();
                    else{
                        str = str + (q.peek());
                        break;
                    }
                }
                if (q.isEmpty()) str = str + "#";
            }
            return str;
    }
    Time Complexity:
    O(n)

    Space Complexity:
    O(n)

    Alternate Solution:
    None
*/