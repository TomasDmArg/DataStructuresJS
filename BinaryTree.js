class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value){
        switch (this.root) {
            case null:
                console.log('%c El arbol está vacío', 'background-color: white, color: black; padding: 50px 100px; font-size: 2rem;');
                break;
            
            
            default:
                if (this.root.value == value ){
                console.log('%c Elemento encontrado', 'background-color: white, color: black; padding: 50px 100px; font-size: 2rem;');
                return this.root;
                }
                let currentNode = this.root;
                while(true){
                    if (currentNode.value > value){
                        console.log('recorrido left');
                        currentNode = currentNode.left;
                        if (currentNode.value == value) {
                            console.log("Elemento encontrado");
                            return currentNode;
                        }
                        if (!currentNode.left) {
                            console.log("No se encontró el elemento");
                            return this;
                        }
                    }
                    if (currentNode.value < value) {
                        console.log('recorrido right');
                        currentNode = currentNode.right;
                        if (currentNode.value == value) {
                            console.log("Elemento encontrado");
                            return currentNode;
                        }
                        if (!currentNode.right) {
                            console.log("No se encontró el elemento");
                            return this;
                        }
                    }
                    console.log('recorrido completo');
                }
                break;
        }
    }
}
const tree = new BinarySearchTree();
