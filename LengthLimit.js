class Stringer {

    constructor(str, len) {
        this.str = str;
        this.len = len;
        this.innerString = this.str;
        this.innerLength = this.str.length;
    }

    toString() { return this.str; }

    increase(l){
        this.len += l;
        if (this.len >= this.innerLength) {
            this.str = this.innerString;
        } else {
            this.str = this.innerString.slice(0, this.len) + '...';
        }
    }

    decrease(l) {
        if (this.len - l < 0) {
            this.len = 0;
        } else {
            this.len -= l;
        }

        if (this.innerLength > this.len) {
            this.str = this.innerString.slice(0, this.len) + '...';
        } else if (this.len >= this.innerLength) {
             this.str = this.innerString;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.increase(5);
console.log(test.toString()); // ...
test.decrease(4);
console.log(test.toString()); // Test
