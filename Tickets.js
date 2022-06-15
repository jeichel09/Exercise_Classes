function tickets(arr, dest) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (let tix of arr) {
        let items = tix.split('|');
        let currTicket = new Ticket(items[0], items[1], items[2]);
        result.push(currTicket);
    }
    let sorted = result.sort(function(a, b) {
        return ((a[dest] < b[dest]) ? -1 : ((a[dest] > b[dest]) ? 1 : 0));
    })
    return sorted;
}
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));
