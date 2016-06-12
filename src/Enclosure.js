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
}
