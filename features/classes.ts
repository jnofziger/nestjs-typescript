class Vehicle {
    constructor(public color: string) {}

    public drive(): void {
        console.log('chugga chugga');
    }

    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, public color: string) {
        super(color);
    }

    public drive(): void {
        console.log('vroom');
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
//vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, 'blue');
car.startDrivingProcess();
//car.honk();
console.log(car.color);