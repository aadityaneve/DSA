/* Find the middle element of a stack */

class Stack {

    // Initializing the object
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to the top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${this.items[this.count]} is added in stack at location ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Remove and delete the top element of the stack
    // Return undefind if the stack is empty
    pop() {
        if (this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1];
        console.log(`${deletedItem} is removed`);
        this.count--;
        return deletedItem;
    }

    // Check top element in array
    peek(){
        console.log(`Top element is ${this.items[this.count-1]}`);
        return this.items[this.count-1];
    }

    // Check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
        return this.count == 0;
    }

    // Check size of the stack
    size(){
        console.log(`${this.count} elements in the stack`);
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

    // Finding midle element in stack
    middleElement(){
        console.log(`Middle element is ${this.items[parseInt(this.count/2)]}`);
        return this.items[parseInt(this.count/2)];
    }

    // Clear all stack
    clear(){
        this.items = [];
        this.count = 0;
        console.log("Stack Cleared");
        return this.items;
    }

}

// Creating Object
const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
stack.push(600);
stack.push(700);

stack.pop();stack.pop();
stack.peek();
stack.isEmpty();
console.log(stack.isEmpty());

stack.size();
console.log(stack.print());

stack.middleElement();
console.log(stack.middleElement());

stack.clear();
console.log(stack.clear());
