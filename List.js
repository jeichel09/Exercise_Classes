class List {
    size = 0;
    constructor() {
        this.arr = [];

    }
    
    add(num) {
        this.arr.push(num);
        this.arr.sort(function(a, b) {
            return a - b;
        });
        this.size ++;
    }
    remove(ind) {
        if (ind < 0 || ind >= this.size) {
            throw new Error('Invalid index');
        } else {
            this.arr.splice(ind, 1);
            this.size --;
        }
    }

    get(ind) {
        if (ind < 0 || ind >= this.size) {
            throw new Error('Invalid index');
        } else {
            return this.arr[ind];
        }
    }
}

let myList = new List();
console.log(myList.hasOwnProperty('size'));
myList.add(11);
//console.log(myList.get(0));
myList.add(1);
myList.add(2);
//console.log(myList.size);
//console.log(myList.get(8));
//myList.remove(0);
console.log(myList.get(1));
console.log(myList.size);
