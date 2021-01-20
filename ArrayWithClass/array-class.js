class Array {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(i){
        return this.data[i];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    unshift(item){
        for (let i = 0; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];
            this.data[0] = item;
        }
        this.length++;
        return this.data[0];
    }
    shift(){
        return this.delete(0);
    }
    shiftIndex(index){
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}
const array = new Array();
console.log(array.push('Tomas'));
console.log(array.push('pedro'));
console.log(array.push('Juan'));
console.log(array.get(0));
console.log(array.delete(1));
console.log(array.unshift('Tomas2'));
console.log(array.shift());
console.log(array);