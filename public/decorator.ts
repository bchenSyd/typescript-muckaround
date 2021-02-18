function ExtendFish(constructor: typeof Fish) {
  return class extends constructor {
    food = this.layer + " prawn";
  };
}

@ExtendFish
class Fish {
  name: string;
  layer = "bottom";
  swim() {
    console.log("all fish can swim");
  }
  constructor(name: string) {
    this.name = name;
  }
}

const yakka = new Fish("yakka");
debugger
console.log(yakka);
console.log(yakka.__proto__);
