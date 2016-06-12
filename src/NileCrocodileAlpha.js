class NileCrocodileAlpha extends NileCrocodile{
  constructor(name){
    super(name);
    this.setAnimalType("Krokodyl nilowy alfa");
  }

  swimSync(){
    return "Macha ogonem i stado pływa synchronicznie"
  }

  getInfo(){
    var myInfo = [];
    myInfo.push(this.eatFood());
    myInfo.push(this.attackWithRotate());
    myInfo.push(this.swimSync());
    myInfo.push(this.eatEgyptian());
    myInfo.push(this.attackFromWater());
    return myInfo;
  }
}
