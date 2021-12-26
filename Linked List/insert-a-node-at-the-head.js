const Node = class {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }

    sizeOfLL() {
        return this.size;
    }

    add(element) {
        let node = new Node(element);

        // If the LL is empty
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.element === element) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                console.log('Removed Element: ', element);
                return true;
            }
            prev = current;
            current = current.next;
        }
    }

    insertAt(element, index) {
        if (index > this.size || (index < 0 && this.size)) {
            return false;
        }

        let node = new Node(element);
        let current = this.head;
        let prev = null;
        let i = 0;
        if (index === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            /* Insert at the index */
            prev.next = node;
            /* Move to the inserted node */
            prev = prev.next;
            /* Add the rest of the current to the inserted node */
            prev.next = current;
            /* Increment Size */
            this.size++;
        }
    }

    print() {
        let current = this.head;
        let index = 0;
        while (current) {
            console.log('Element: ', current.element, 'Index: ', index++);
            current = current.next;
        }
    }
}

let list = new LinkedList();
console.log(list.isEmpty());
list.add(5);
list.add(6);
list.insertAt(99, 1);
list.print();
list.removeElement(5);
list.print();
console.log(list);
