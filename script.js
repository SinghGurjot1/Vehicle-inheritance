// Part 1: Proto Inheritance

// Prototype object for vehicles
const vehicleProto = {
    make: 'Unknown',
    model: 'Unknown',
    year: 'Unknown',
    displayInfo: function () {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  };
  
  // Function to create a car object inheriting from vehicleProto
  function createCar(make, model, year, numDoors) {
    const car = Object.create(vehicleProto);
    car.make = make;
    car.model = model;
    car.year = year;
    car.numDoors = numDoors;
    car.displayInfo = function () {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, NumDoors: ${this.numDoors}`);
    };
    return car;
  }
  
  // Function to create a bike object inheriting from vehicleProto
  function createBike(make, model, year, numWheels) {
    const bike = Object.create(vehicleProto);
    bike.make = make;
    bike.model = model;
    bike.year = year;
    bike.numWheels = numWheels;
    bike.displayInfo = function () {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, NumWheels: ${this.numWheels}`);
    };
    return bike;
  }
  
  // Creating a car
  const myCar = createCar('Toyota', 'Camry', 2022, 4);
  myCar.displayInfo(); 
  
  // Creating a bike
  const myBike = createBike('Harley-Davidson', 'Street Glide', 2021, 2);
  myBike.displayInfo(); 
  
//  In this example, vehicleProto serves as the prototype object with shared properties. 
//  The createCar and createBike functions use Object.create(vehicleProto) to create objects that 
//  inherit from vehicleProto and then add specific properties (numDoors for cars, numWheels for bikes) 
//  to showcase the versatility of inheritance. The displayInfo method is part of the prototype, and both 
//  car and bike objects can use it without having their own copies.






