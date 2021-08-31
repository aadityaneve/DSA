/* Implement Stack from Scratch */

class Stack {

    // Constructor is to initialize the object
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if (this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deletedItem} removed`);
        return deletedItem;
    }

    // Check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
        return this.count == 0;
    }

    // Check size of stack
    size(){
        console.log(`${this.count} elements in stack`);
        return this.count;
    }

    // Print all elements in stack
    print(){
        let str = "";
        for(let i=0;i<this.count;i++){
            str+=this.items[i]+" ";
        }
        return str;
    }

    // Clear stack
    clear(){
        this.items = [];
        this.count = 0;
        console.log("Stack Cleared");
        return this.items;
    }

}

// Creating object
const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

console.log(stack.print());

stack.pop();
stack.pop();

stack.isEmpty();

stack.clear();

stack.size();

console.log(stack.print());