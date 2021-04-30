class Vehicle {
    constructor(make,model,year,weight) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight =weight;
    this.needsMaintenance = false;
    this.TripsSinceMaintenance = 0;
    }

    getMake() {
        return this.make;
    }

    setMake(newMake) {
        this.make = newMake;
    }

    getModel() {
        return this.model;
    }

    setModel(newModel) {
        this.model = newModel;
    }

    getYear() {
        return this.year;
    }

    setYear(newYear) {
        this.make = newYear;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }

    repair() {
        this.TripsSinceMaintenance = 0;
        this.needsMaintenance = false;
        console.log("The Vehicle is repaired");
    }
}

class Cars extends Vehicle {
    constructor(make,model,year,weight) {
        super(make,model,year,weight);
        this.isDriving = false;
    }
    drive(){
        this.isDriving = true;
        console.log(this.make + " is driving.");
    }

    stop(){
        this.isDriving = false;
        console.log(this.make + " has stopped.");
        this.TripsSinceMaintenance ++;
        if(this.TripsSinceMaintenance>100) {
            this.needsMaintenance = true;
            console.log(this.make + " needs maintenance!!");
        }
    }

}

class Planes extends Vehicle {
    constructor(make,model,year,weight) {
        super(make,model,year,weight);
        this.isFlying = false;
    }
    fly(){
        if (this.needsMaintenance) {
            console.log("Can't fly until repaired");
            return false;
        } 
        this.isFlying = true;
        console.log(this.make + " is flying.");
    }

    land(){
        if (this.isFlying) {
            this.isFlying = false;
            console.log(this.make + " has landed.");
            this.TripsSinceMaintenance ++;
            if(this.TripsSinceMaintenance>100) {
                this.needsMaintenance = true;
                console.log(this.make + " needs maintenance!!");
            }
        }
    }
}

const myCar =  new Cars("Mercedes", "S class", 2015, 1900);
const myWifeCar =  new Cars("Tesla", "Model 3", 2020, 2000);
const mySonCar = new Cars("Nissan", "GTR", 2008, 1700);

console.log(myCar.getMake());
var legs = 150;
for (i=0; i<legs; i++) {
    myCar.drive();
    myCar.stop();
}
myCar.repair();

console.log(myWifeCar.getMake());
legs = 90;
for (i=0; i<legs; i++) {
    myWifeCar.drive();
    myWifeCar.stop();
}
myWifeCar.repair();

console.log(mySonCar.getMake());
legs = 250;
for (i=0; i<legs; i++) {
    mySonCar.drive();
    mySonCar.stop();
}
mySonCar.repair();

const myPlane = new Planes("Airbus", "320", 66000,1996);
console.log(myPlane.getMake());
legs = 110;
for (i=0; i<legs; i++) {
    myPlane.fly();
    myPlane.land();
}
myPlane.repair();
