class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(num) {
        let newValue = this.value + num.valueOf();
        let c = new Hex(newValue);
        return c;
    }

    minus(num) {
        let newValue = this.value - num.valueOf();
        let c = new Hex(newValue);
        return c;
    }

    parse(str) {
        let deci = parseInt(str,16);
        return deci;
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
