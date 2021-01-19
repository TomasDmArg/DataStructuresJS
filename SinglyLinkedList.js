class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
let index = 2;
class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    addNodes(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        index++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    addNodesAt(value, index){
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    removeNode(index){
        const previousPointer = this.getTheIndex(this.length -1);
        switch (index) {
            case index > this.length:
                console.log(`El índice es mayor que la longitud de la lista. Longitud: ${this.length}`);
                return this;

            case index == this.length:
                previousPointer.next = null;
                this.length--;
                return this;

            default:
                const firstPointer = this.getTheIndex(index -1);
                const nextPointer = firstPointer.next.next;
                firstPointer.next = nextPointer;
                this.length--;
                return this;
        }
    }
}
let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.addNodes(index);
myLinkedList.addNodes(index);
myLinkedList.addNodes(index);
myLinkedList.addNodes(index);
myLinkedList.addNodesAt('Nodo intermedio', 2);
console.log(myLinkedList);