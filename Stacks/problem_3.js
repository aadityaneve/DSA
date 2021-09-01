/* Reverse a String using Stack */

class Stack {

    // Initializing the object
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Adding elements into stack
    push(element) {
        this.items[this.count] = element;
        //console.log(`${this.items[this.count]} is added to the stack at location ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Remove and delete the top most element in stack
    // Return undefined if the stack is empty
    pop() {
        if (this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1];
        //console.log(`${deletedItem} is removed`);
        this.count--;
        return deletedItem;
    }

    size() {
        return this.count;
    }

    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }

}

const stack = new Stack();

var string = "Hello World !";

// Push all string elements to stack
for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
}
console.log(stack.print());

// Reversing the string using stack
var newStr = "";
for(let i=stack.size();i>0;i--){
    newStr+=stack.pop()+" ";
}
console.log(newStr);