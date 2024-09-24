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
        let newKey = this.hash(key);
        for(let i = 0; i < this.bucket.length; i++){
            if (this.bucket[i].newKey === newKey) {
                this.bucket[i].value = value;
            }    
        };
        this.bucket.push({newKey,value});
    };
    get(key){
        let newKey = this.hash(key);
        for (let i = 0; i < this.bucket.length; i++) {
            return (this.bucket[i].newKey === newKey) ? item.value : null;
        };
    };
    has(key){
        let newKey = this.hash(key);
        for (let i = 0; i < this.bucket.length; i++) {
            return (this.bucket[i].newKey === newKey) ? true : false;
        };
    };
    remove(key){
        let newKey = this.hash(key);
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i].newKey === newKey) {
                this.bucket.splice(i,1);
                return true;
            };
            return false;
        };
    };
    length(){
        return this.bucket.length;
    };
    clear(){
        this.bucket = [];
        return;
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
            keyValuesArray.push([this.bucket[i].newKey , this.bucket[i].value]);
        };
        
        return keyValuesArray;
    }
}