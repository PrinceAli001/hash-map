export default class HashMap{
    capacity = 16;
    loadFactor = 0.75;
    bucket = [];

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity
        };

        return hashCode;
    };
    set(key,value){
        if (this.bucket.length/this.capacity >= this.loadFactor) {
            this.capacity += 8;
        }

        let newKey = this.hash(key);
        for(let i = 0; i < this.bucket.length; i++){
            if (this.bucket[i].key === newKey) {
                return this.bucket[i].value.push(value);
            }    
        };
         for(let i = 0; i < this.bucket.length; i++){
            if (this.bucket[i].key === newKey) {
                return this.bucket[i].value = value;
            }    
        };
        this.bucket.push({key: newKey,value: [value]});
    };
    get(key){
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].key === key) {
                return this.bucket[i].value;
            } 
        }
        return null;
    };
    has(key){
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].key === key) {
               return true;
            };
        };
        return false;
    };
    remove(key){
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].key === key) {
                this.bucket.splice(i,1);
                return true;
            };
        };
        return false;
    };
    length(){
        return this.bucket.length;
    };
    clear(){
        return this.bucket = [];
    }
    keys(){
        let keysArray = [];

        for (let i = 0; i < this.bucket.length; i++) {
            keysArray.push(this.bucket[i].key);
        };

        return keysArray;
    };
    values(){
        let valuesArray = [];

        for (let i = 0; i < this.bucket.length; i++) {
            valuesArray.push(this.bucket[i].value);
        };

        return valuesArray;
    };
    entries(){
        let keyValuesArray = [];

        for (let i = 0; i < this.bucket.length; i++) {
            keyValuesArray.push([this.bucket[i].key, this.bucket[i].value]);
        };
        
        return keyValuesArray;
    }
}