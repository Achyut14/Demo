

class Vehicle {
    constructor(make, model, yeare) {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk(){
        return 'Beep.';
    }
    toString(){
        return `The Vehicle is ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels =4;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }

  class Garage {
    constructor(capacity){
        this.Vehicle = [];
        this.capacity =capacity;
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        if (this.Vehicle.length >= this.capacity){
            return "Sorry, we're full";
        }
        this.Vehicle.push(newVehicle);
        return "Vehicle added!";

    }
  }