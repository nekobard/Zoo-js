class Enclosure{
  constructor(name){
    this.setName(name);
    this.animals = [];
  }

  setName(name){
    this.name = name
  }

  getName(){
    return this.name;
  }

  addAnimal(animalType, animalName){

    if(animalType == 'Krokodyl nilowy'){
      this.animals.push(new NileCrocodile(animalName));
    } else if(animalType == 'Krokodyl amerykanski'){
      this.animals.push(new AmericanCrocodile(animalName));
    }

  }

  feedAnimals(){
    this.animals.forEach(function(animal){
      animal.setThirsty(false);
      animal.setHungry(false);
    })
  }
}
