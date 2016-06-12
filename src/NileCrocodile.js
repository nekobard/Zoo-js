class NileCrocodile extends Crocodile{
  constructor(name){
    super(name);
    this.setAnimalType("Krokodyl nilowy");
  }

  eatEgyptian(){
    return "Je egipcjanina"
  }

  getInfo(){
    var myInfo = [];
    myInfo.push(this.eatFood());
    myInfo.push(this.attackWithRotate());
    myInfo.push(this.drinkWater());
    myInfo.push(this.eatEgyptian());
    myInfo.push(this.attackFromWater());
    return myInfo;
  }
}
