class Lemur extends Monkey{
  constructor(name){
    super(name);
    this.setAnimalType("Lemur");
  }

  dance(){
    return "Wygina śmiało ciało"
  }

  getInfo(){
    var myInfo = [];
    myInfo.push(this.dance());
    myInfo.push(this.eatFood());
    myInfo.push(this.drinkWater());
    return myInfo;
  }
}
