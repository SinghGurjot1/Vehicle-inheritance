// Part 3: Classes

// Vehicle class
class Vehicle {
    constructor(make = 'Unknown', model = 'Unknown', year = 'Unknown') {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayInfo() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  // Car class inheriting from Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, numDoors = 4) {
      // Call the parent constructor using super
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    displayInfo() {
      // Call the parent displayInfo method using super
      super.displayInfo();
      console.log(`NumDoors: ${this.numDoors}`);
    }
  
    // Additional functionality for cars
    honk() {
      console.log('Honk! Honk!');
    }
  }
  
  // Bike class inheriting from Vehicle
  class Bike extends Vehicle {
    constructor(make, model, year, numWheels = 2) {
      // Call the parent constructor using super
      super(make, model, year);
      this.numWheels = numWheels;
    }
  
    displayInfo() {
      // Call the parent displayInfo method using super
      super.displayInfo();
      console.log(`NumWheels: ${this.numWheels}`);
    }
  
    // Additional functionality for bikes
    ringBell() {
      console.log('Ring! Ring!');
    }
  }
  
  // Creating a car
  const myCar = new Car('Toyota', 'Camry', 2022, 4);
  myCar.displayInfo();
  myCar.honk(); 
  
  // Creating a bike
  const myBike = new Bike('Harley-Davidson', 'Street Glide', 2021, 2);
  myBike.displayInfo();
  myBike.ringBell(); 

// In this example,I've uses ES6 classes (Vehicle, Car, and Bike) for a more modern approach 
// to object-oriented programming. The extends keyword is used for inheritance, and the super
// keyword is used to call the constructor and methods of the parent class. Additionally, I've 
// added two distinct functionalities for cars (honk method) and bikes (ringBell method) to highlight 
// their individuality.
  