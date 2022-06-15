function solve(arr) {
    let storage = {}
    let bottles = [];
    for (let b of arr) {
        let currFlav = b.split(" => ");
        if (!storage.hasOwnProperty(currFlav[0])) {
            storage[currFlav[0]] = Number(currFlav[1]);
        } else {
            storage[currFlav[0]] = storage[currFlav[0]] + Number(currFlav[1]);
        }

        if (storage[currFlav[0]] / 1000 >= 1) {
            if (!bottles.includes(currFlav[0])) {
                bottles.push(currFlav[0]);
            }
        }

    }

    for (let fl of bottles) {
        let bottCount = Math.floor(storage[fl] / 1000);
        console.log(`${fl} => ${bottCount}`);
    }
}
solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
console.log("----------");
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);