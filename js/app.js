// Create Parent Class Cyber Pet 

class MythicalPet {
    constructor(petname, hunger, thirst, /*happiness,*/ energy, takeDrink, eatFood /*temparature*/) { // define parameter of the class object 
      // create key value pairs of i.e. the parent propeties of all Cyber Pet (shared properties and values) 
        this._petname = petname;
        this._hunger = 0;
        this._thirst = 0;
        //this._happiness = 50;
        this._energy = 40;
        this._sleep = 0;
        // this._takeDrink = takeDrink;
        // this._eatFood = eatFood;
        //this._temparature = ['hot', 'too warm', 'warm', 'just right', 'cold', 'too cold', 'freezing'];
    }

    get petname() {
      //petname = names[randomNumber]; // when called it should return a random name from an array see static method generateName() 
      return this._petname;
    }

    get energy() {
      return this._energy;
    }

     takeDrink() { // - add 10 points to energy per drink
      this._energy += 10;
    }

     eatFood() {  //  - add 10 points to energy per feed
     this._energy += 10;
    }

    play() {  // Play function - subtract 20 points from energy
      this.energy -=20;
    }

    

  //  //Generate Random Name for Mythical Pet - through a static method 
  //   static generateName() {
  //   const names = ['Gregor', 'Puff', 'Spike', 'Buffy', 'Willow', 'Tara', 'Sport', 'Linda', 'Dave', 'George', 'Tanya', 'Igor', 'Norman', 'Jess', 'Liz', 'Linda', 'Fluffy', "Tiddles"];
  //   const randomName = names[Math.floor(Math.random() * names.length)];
  //   return names[randomName]
  //   // newName = names[randomName];
  //   // return newName;
     
//}


// static generateName() {
//   const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
//   const randomNumber = Math.floor(Math.random()*5);
//   return names[randomNumber];
// }

}


//================== Create Child Classes ======================//

class Dragon extends MythicalPet {
  constructor(petname, fireBreath) {
    super(petname);
    this._fireBreath = fireBreath;
  }
}

class Chimera extends MythicalPet {
  constructor (petname, roar) {
    super(petname);
    this._roar = roar;
  }
}


class Grifin extends MythicalPet {
  constructor (petname, treasure) {
    super(petname);
    this._treasure = treasure;
  }
}


class GiantSerpent extends MythicalPet {
  constructor (petname, hiss) {
    super(petname);
    this._hiss = hiss;
  }
}

  //==== Create New Instances of Child Classes =====//

// const aMythicalCreature = new MythicalPet(this.petname); // returns undefined
// const aMythicalCreature = new MythicalPet(`${this.petname}`); // returns undefined
const petOne = new GiantSerpent(); 
const petTwo = new Dragon(); 
const petThree = new Chimera(); 
const petFour = new Grifin(); 


console.log(petOne); // should print a name from the array
console.log(petTwo);
console.log(petThree);
console.log(petFour);


//============ Store DOM Elements =====//

let playWithPet = document.getElementById("play_with");
let giveDrink = document.getElementById("give_drink");
let feedPet = document.getElementById("feed");
let strokePet = document.getElementById("stroke");
let treatPet = document.getElementById("treat");
let hungerStatus = document.getElementById("hunger");
let thirstStatus = document.getElementById("thirst");
let happinessStatus = document.getElementById("happiness");
let overallPetStatus = document.getElementById ("pet_status");



const hungerMessage = () => {
  if(this._hunger <= 10) {
      return `${petname} doesn't need any food right now`
  }
  else if(this._hunger >= 11 && this.hunger <20) {
    return `${petname} seems well fed`
  }
  else if(this._hunger >= 21 && this.hunger <30) {
    return `${petname} is a little peckish`
  }
  else if(this._hunger >= 31 && this.hunger <40) {
    return `${petname} is very hungry`
  }
  else if(this._hunger >= 41 && this.hunger <50) {
    return `${petname} is famished`
  }
}

hungerMessage();
console.log(hungerMessage());


  