// 1. Defining a constructor and setting properties

// Prototype style

export function Rabbit(type) {
  this.type = type;
}

// 2. Adding a method

Rabbit.prototype.say = function(message) {
  console.log(`The ${this.type} rabbit says ${message}`);
};

// 3. Adding a static function

Rabbit.cute = function() {
  return new Rabbit("cute");
};

Rabbit.evil = function() {
  return new Rabbit("evil");
};

// Class style

export class Bunny {
  constructor(type) {
    this.type = type;
  }

  say(message) {
    console.log(`The ${this.type} bunny says ${message}`);
  }

  static cute() {
    return new Bunny("cute");
  }

  static evil() {
    return new Bunny("evil");
  }
}

// getters and setters

export class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = value - 32 / 1.8;
  }
}

const temperature = new Temperature(22);
console.log(temperature.fahrenheit); // -> 71.6

temperature.fahrenheit = 86;
console.log(temperature.celisus); // -> 30
