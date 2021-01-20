class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    getFirst(){
        return this.first;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else if (this.length === 1){
            //Añadimos el valor añadido al final
            this.last = newNode;
            const holdingPointer = this.first;
            this.first.next = this.last;
        }else{
            //Al final lo contenemos en un holding pointer y lo desplazamos 
            const holdingPointer = this.last;
            this.last = newNode;
            holdingPointer.next = this.last;
        }
        this.length++;
        return this;
    }
    deleteFirst(){
        if(this.length === 0){
            console.log('%c La longitud del stack es 0', 'background-color: white; color: black; padding: 50px 100px; font-size:2rem');
        } else{
            console.log(this.first.next);
            this.first = this.first.next;
            this.length--;
        }
        return this;
    }
}
const myQueue = new Queue();