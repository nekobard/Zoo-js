class Enclosure{
  constructor(name){
    this.setName(name);
    this.animals = [];
    this.animalTypes = [];
  }

  setName(name){
    this.name = name
  }

  getName(){
    return this.name;
  }

  addAnimalType(animalType){
    console.log(animalType);
    if(this.animalTypes.indexOf(animalType) == -1){
      this.animalTypes.push(animalType);
    }
  }

  addAnimal(animalType, animalName){
    var self = this;
    if(animalType == 'Krokodyl nilowy'){
      self.addAnimalType(animalType);
      this.animals.push(new NileCrocodile(animalName));
    } else if(animalType == 'Krokodyl amerykanski'){
      self.addAnimalType(animalType);
      this.animals.push(new AmericanCrocodile(animalName));
    }

  }

  feedAnimals(){
    this.animals.forEach(function(animal){
      animal.setThirsty(false);
      animal.setHungry(false);
    })
  }

  getAnimalsState(){
    var popup = document.getElementById('info-popup');
    popup.style.display = 'block';

    var popup = document.getElementById('info-list');

    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

    this.animals.forEach(function(animal){

      var iAnimalName = document.createElement("H3");
      var iAnimalNameText = document.createTextNode(animal.getName());
      iAnimalName.appendChild(iAnimalNameText);
      popup.appendChild(iAnimalName);

      var info = document.createElement("P");
      if(animal.isThirsty() && animal.isHungry()){
        var infoText = document.createTextNode("Jest głodny i spragniony");
        info.appendChild(infoText);
      } else{
        var infoText = document.createTextNode("Najedzony i napity");
        info.appendChild(infoText);
      }
      popup.appendChild(info);
    })
  }

  getAnimalsInfo(){
    var popup = document.getElementById('info-popup');
    popup.style.display = 'block';

    var popup = document.getElementById('info-list');

    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

    this.animals.forEach(function(animal){

      var iAnimalName = document.createElement("H3");
      var iAnimalNameText = document.createTextNode(animal.getName());
      iAnimalName.appendChild(iAnimalNameText);
      popup.appendChild(iAnimalName);

      var doingArray = [];
      doingArray = animal.getInfo();
      doingArray.forEach(function(aInfo){
        var info = document.createElement("P");
        var infoText = document.createTextNode(aInfo);
        info.appendChild(infoText);
        popup.appendChild(info);
      });

    })
  }

  getAnimalsAmount(){
    var self = this;
    var popup = document.getElementById('info-popup');
    popup.style.display = 'block';

    var popup = document.getElementById('info-list');

    while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }

    var animalsAmount = document.createElement("H3");
    var animalsAmountText = document.createTextNode("Ilośc zwierząt: " + self.animals.length);
    animalsAmount.appendChild(animalsAmountText);
    popup.appendChild(animalsAmount);
    self.animalTypes.forEach(function(aType){
      var animalsCount = 0;
      self.animals.forEach(function(animal){
        if(animal.getAnimalType() == aType){
          animalsCount++;
        }
      });

      var info = document.createElement("P");
      var infoText = document.createTextNode(aType + ": " + animalsCount);
      info.appendChild(infoText);
      popup.appendChild(info);
    });
  }
}
