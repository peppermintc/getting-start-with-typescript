class Vehicle {
  drive(): void {
    console.log("chuga chuga");
  }
  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.drive();
car.honk();
