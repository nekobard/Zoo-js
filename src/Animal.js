class Animal{
  constructor(name) {
    this.setName(name);
    this.setThirsty(true);
    this.setHungry(true);
  }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }

  isThirsty(){
    return this.thirsty;
  }

  setThirsty(thirsty){
    this.thirsty = thirsty;
  }

  isHungry(){
    return this.hungry;
  }

  setHungry(hungry){
    this.hungry = hungry;
  }

  getAnimalType(){
    return this.animalType;
  }

  setAnimalType(animalType){
    this.animalType = animalType;
  }

  eatFood(){
    return "Je"
  }

  drinkWater(){
    return "Pije"
  }

  getInfo(){
    //info
  }
}
