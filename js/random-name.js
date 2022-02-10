class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    static generateName() {
      const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
      const randomNumber = Math.floor(Math.random()*5);
      return names[randomNumber];
    }
  } 

//   const testClass = new Animal(generateName());

  console.log(Animal.generateName());

