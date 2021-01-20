class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
let index = 2;
class MyDoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    addNodes(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        index++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        newNode.prev = null;
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
        const nextPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = nextPointer;
        newNode.prev = firstPointer;
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
        switch (index) {
            case index > this.length:
                console.log(`El índice es mayor que la longitud de la lista. Longitud: ${this.length}`);
                return this;
                
            case index == this.length:
                const previousPointer = this.getTheIndex(this.length -1);
                previousPointer.next = null;
                this.length--;
                return this;

            default:
                const firstPointer = this.getTheIndex(index - 1);
                const pointerToRemove = firstPointer.next;
                const nextToPointerToRemove = pointerToRemove.next;
                nextToPointerToRemove.prev = firstPointer;
                firstPointer.next = nextToPointerToRemove;
                this.length--;
                return this;
        }
    }
}
let doublyLinkedList = new MyDoublyLinkedList();
doublyLinkedList.addNodes(1);
doublyLinkedList.addNodes(2);
doublyLinkedList.addNodes(3);
doublyLinkedList.addNodes(4);
doublyLinkedList.addNodes(5);
doublyLinkedList.addNodesAt('Tomas',3);
doublyLinkedList.removeNode(5);