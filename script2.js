// Part 2: Constructor Inheritance

// Vehicle constructor
function Vehicle(make, model, year) {
    this.make = make || 'Unknown';
    this.model = model || 'Unknown';
    this.year = year || 'Unknown';
  }
  
  // Method shared by all vehicles through prototype
  Vehicle.prototype.displayInfo = function () {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  };
  
  // Car constructor inheriting from Vehicle
  function Car(make, model, year, numDoors) {
    // Call the parent constructor to initialize common attributes
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors || 4; // Default to 4 doors if not provided
  }
  
  // Inherit methods from Vehicle prototype
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Method specific to cars
  Car.prototype.displayInfo = function () {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, NumDoors: ${this.numDoors}`);
  };
  
  // Bike constructor inheriting from Vehicle
  function Bike(make, model, year, numWheels) {
    // Call the parent constructor to initialize common attributes
    Vehicle.call(this, make, model, year);
    this.numWheels = numWheels || 2; // Default to 2 wheels if not provided
  }
  
  // Inherit methods from Vehicle prototype
  Bike.prototype = Object.create(Vehicle.prototype);
  
  // Method specific to bikes
  Bike.prototype.displayInfo = function () {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, NumWheels: ${this.numWheels}`);
  };
  
  // Creating a car
  const myCar2 = new Car('Honda', 'Accord', 2022, 4);
  myCar2.displayInfo(); 
  
  // Creating a bike
  const myBike2 = new Bike('Kawasaki', 'Ninja H2 R', 2021, 2);
  myBike2.displayInfo(); 
  
// In this example, the Vehicle constructor encapsulates the common attributes, and Car and Bike constructors inherit 
// from Vehicle. Specific properties (numDoors for a car and numWheels for a bike) are defined within these constructors 
// to reflect their unique features. The displayInfo method is overridden for both Car and Bike to include the specific traits.
