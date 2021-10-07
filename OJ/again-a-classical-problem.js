/*
    Again a classical problem Ended
    Description

    A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

    Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

    A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

    By this logic, we say a sequence of brackets is balanced if the following conditions are met:

    It contains no unmatched brackets.

    The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

    Given a string, you have to comment if it is balanced or not


    Input
    Input Format

    First line of input contains t which is the number of test cases present in the question

    Each test case has a string

    Constraints

    t < 100

    length of string < 100


    Output
    Print "balanced" if the string is balanced, otherwise print "not balanced" in case the string is not balanced


    Sample Input 1 

    3
    {([])}
    ()
    ([]
    Sample Output 1

    balanced
    balanced
    not balanced
*/


function againAClassicalProblem(string) {

    var stack = [];
    var map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    if (string.length % 2 == 0) {
        for (let i = 0; i < string.length; i++) {
            // [](){}[](){}{()}
            if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
                stack.push(string[i]);
                // console.log(stack);
            } else {
                // console.log(stack[stack.length-1]+" "+string[i]);
                if (stack.length == 0) {
                    return false;
                }

                if (map[stack[stack.length - 1]] != string[i]) {
                    return false;
                } else {
                    // console.log("Element Popped : ", stack.pop());
                    stack.pop();
                }                
            }
        }
        if (stack.length == 0) {
            return true;
        }else{
            return false;
        }

    } else {
        return false;
    }
}

function runProgram(input) {

    input = input.trim().split('\n');
    var line = 0;
    for (let i = 0; i < +input[0]; i++) {
        var string = input[++line].trim();
        if (againAClassicalProblem(string)) {
            console.log("balanced");
        } else {
            console.log("not balanced");
        }
    }

}
if (process.env.USERNAME === "aneve") {
    runProgram(`5
    (}[)((){{[}])}(([)}(({[))))])][}]])}[[()]([}}[())}]{{[[}{)](())][[[))[)}{][()[]}[(][(}]]{[[[]((]]{])
    ](){{)}}))((]}]({}{[))[]}}[](](}]({{}{}{{([)}){(()(){]{])[{[(()})][{(({}}}}{)(]}([)]{}}){)[[}(}]}}}{
    }({{)}])}]}}}()]}])][)})[]]{[}]]{}]{{)}){(}(])}{]}[[]}][])])(((}{][{}}[()]]]]){)}]]}}}}[))(}{][}[{[(
    ()(}([}){{)}}})))[]}}]{}{]][{][[(]))}){()}}()}[){)[][[{{]})}){}{}{{}{(){[){)}}({{][({)}[)[]}{{}}[)}{
    [](){}[](){}{()}`);
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
function againAClassicalProblem(string) {

    // string = String(string);
    // console.log(string.toString());

    var i = 0;
    var j = string.length - 1;
    while (i <= j) {
        // console.log(i+":"+j);
        // console.log(string[i]+" "+string[j]);
        if(string.length%2 == 0){
            switch (string[i]) {
                case '{': if (string[j] == '}') {
                                i++;
                                j--;
                            continue;
                        } else
                            if (string[i + 1] != '}') {
                                return false;
                            } else {
                                i++;
                            }
                            break;
                case '(': if (string[j] == ')') {
                                i++;
                                j--;
                             continue;
                            } else
                            if (string[i + 1] != ')') {
                                return false;
                            } else {
                                i++;
                            }
                            break;
                case '[': if (string[j] == ']') {
                            i++;
                            j--;
                            continue;
                        } else
                            if (string[i + 1] != ']') {
                                return false;
                            } else {
                                i++;
                            }
                            break;
                default: return false;
            }

            i++;
            j--;
        }else{
            return false;
        }

    }
    return true;
}
*/