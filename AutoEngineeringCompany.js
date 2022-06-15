function solve(arr) {
    let cars = {};
    for (let car of arr) {
        let [carBrand, carModel, producedCars] = car.split(" | ");
        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = {};
            cars[carBrand][carModel] = Number(producedCars);
        } else {
            if (!cars[carBrand].hasOwnProperty(carModel)) {
                cars[carBrand][carModel] = Number(producedCars);
            } else {
                cars[carBrand][carModel] += Number(producedCars);
            }
        }
    }
    let carData = Object.entries(cars);
    for (let b of carData) {
        console.log(b[0]);
        for (let m in b[1]) {
            console.log(`###${m} -> ${b[1][m]}`);
        }
    }
    //console.log(carData);    
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
