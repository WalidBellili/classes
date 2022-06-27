class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(acceleration){
        this.speed += acceleration
        return this.speed
    }
    break(frene) {
        this.speed -= frene 
        return this.speed
       
    }
    discribe(){
        return `${this.brand} running  at ${this.speed}`
    

    }
}
const ford = new Car("Ford", 0)
console.log(ford);
console.log(ford.accelerate(20));
console.log(ford.break(5));
console.log(ford.discribe());
console.log(ford.accelerate(50));
console.log(ford.break(25));

const twingo = new Car("twingo", 0)
console.log(twingo);
console.log(twingo.accelerate(100));
console.log(twingo.break(89));
console.log(twingo.discribe());
console.log(twingo.accelerate(10));
console.log(twingo.break(21));