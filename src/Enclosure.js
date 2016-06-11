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
}
