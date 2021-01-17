
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
            return undefined;
        }
    }
    bulkDeleteByKey(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key) {
                    const elementToDelete = this.data[address];
                    delete this.data[address];
                    return `Elemento eliminado: ${elementToDelete}`;
                }
            }
            
            return undefined;
        }
    }
    singleDelete(key, value){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                console.log(currentBucket[i][1]);
                if (currentBucket[i][0] === key && currentBucket[i][1] == value) {
                    const elementToDelete = this.data[address];
                    delete this.data[address];
                    return `Elemento eliminado: ${elementToDelete}`;
                }
            }
            
            return undefined;
        }
    }
    getAllKeys(){
        let keys = myHashTable.data;
        for (let i = 0; i < keys.length; i++) {
            if(keys[i] != undefined){
                console.log(keys[i])
            }            
        }
    }
}
//crea una Hash Table con 50 posiciones
const myHashTable = new HashTable(50);
//añade algo a una posicion de la Hash Table
myHashTable.set('Key', 'value');
//Obtiene lo almacenado en alguna key
myHashTable.get('Key');
//Elimina lo almacenado en alguna key
myHashTable.bulkDeleteByKey('key');
myHashTable.singleDelete('key', 'value');
//Obtiene todas las keys
myHashTable.getAllKeys();

