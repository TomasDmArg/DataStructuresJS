class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0){
            console.log('%c La longitud del stack es 0', 'background-color: white; color: black; padding: 50px 100px; font-size:2rem');
        } else{
            console.log(this.top.next);
            this.top = this.top.next;
            this.length--;
        }
        return this;
    }
}
const myStack = new Stack();