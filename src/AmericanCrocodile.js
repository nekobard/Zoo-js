class AmericanCrocodile extends Crocodile{
  constructor(name){
    super(name);
    this.setAnimalType("Krokodyl amerykanski");
  }

  eatHamburger(){
    return "Je hamburgera"
  }

  showEyes(){
    return "Wystawia oczy nad wode"
  }

  getInfo(){
    var myInfo = [];
    myInfo.push(this.eatHamburger());
    myInfo.push(this.drinkWater());
    myInfo.push(this.showEyes());
    myInfo.push(this.eatFood());
    return myInfo;
  }
}
