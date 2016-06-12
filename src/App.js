class App{
  render(){
    var self = this;
    var enclosuresNode = document.getElementById("enclosures");
    while (enclosuresNode.firstChild) {
        enclosuresNode.removeChild(enclosuresNode.firstChild);
    }
    enclosures.forEach(function(enclosure, encIndex){
      var enclosureList = document.getElementById('enclosures');
      var enclosureItem = document.createElement("LI");

      var enclosureName = document.createElement("H2");
      var enclosureNameText = document.createTextNode(enclosure.getName());
      enclosureName.appendChild(enclosureNameText);


      var newAnimalDiv = document.createElement("DIV");
      newAnimalDiv.className = 'my-inputs inputs-li';
      var inputAnimal = document.createElement("INPUT");
      inputAnimal.type = 'text';
      inputAnimal.className = 'input-enclosure-animal';
      inputAnimal.placeholder = 'Wpisz imie np. Cezary';
      newAnimalDiv.appendChild(inputAnimal);
      var selectType = document.createElement("SELECT");
      var typeOne = document.createElement("OPTION");
      typeOne.value = 'Krokodyl nilowy';
      typeOne.textContent = 'Krokodyl nilowy';
      var typeTwo = document.createElement("OPTION");
      typeTwo.value = 'Krokodyl amerykanski';
      typeTwo.textContent = 'Krokodyl amerykanski';
      var typeThree = document.createElement("OPTION");
      typeThree.value = 'Lemur';
      typeThree.textContent = 'Lemur';
      var typeFourth = document.createElement("OPTION");
      typeFourth.value = 'Krokodyl nilowy alfa';
      typeFourth.textContent = 'Krokodyl nilowy alfa';
      selectType.appendChild(typeOne);
      selectType.appendChild(typeTwo);
      selectType.appendChild(typeThree);
      selectType.appendChild(typeFourth);
      newAnimalDiv.appendChild(selectType);
      var newAnimalButton = document.createElement("BUTTON");
      newAnimalButton.className = 'button-enclosure';
      newAnimalButton.textContent = 'Dodaj';
      newAnimalButton.key = encIndex;
      newAnimalButton.addEventListener('click', function(){
        var input = document.querySelectorAll(".input-enclosure-animal");

        var array = [];
        for(var i=0; i < input.length; i++){
          array.push(input[i]);
        }

        var animalNameData = array.reverse()[this.key].value;

        if(animalNameData != null && animalNameData != ''){
          var select = document.querySelectorAll("select");

          array = [];
          for(var i=0; i < select.length; i++){
            array.push(select[i]);
          }

          var animalTypeData = array.reverse()[this.key].value;

          enclosures[this.key].addAnimal(animalTypeData, animalNameData);

          self.render();
        }



      });


      newAnimalDiv.appendChild(newAnimalButton);

      var feedButton = document.createElement("BUTTON");
      feedButton.className = 'button-feed';
      feedButton.textContent = 'Nakarm';
      feedButton.key = encIndex;
      feedButton.addEventListener('click', function(){
        enclosures[this.key].feedAnimals();
        self.render();
      });
      newAnimalDiv.appendChild(feedButton);

      var stateButton = document.createElement("BUTTON");
      stateButton.className = 'button-state';
      stateButton.textContent = 'Stan';
      stateButton.key = encIndex;
      stateButton.addEventListener('click', function(){
        enclosures[this.key].getAnimalsState();
      });
      newAnimalDiv.appendChild(stateButton);

      var doingButton = document.createElement("BUTTON");
      doingButton.className = 'button-doing';
      doingButton.textContent = 'Co robią';
      doingButton.key = encIndex;
      doingButton.addEventListener('click', function(){
        enclosures[this.key].getAnimalsInfo();
      });
      newAnimalDiv.appendChild(doingButton);

      var amountButton = document.createElement("BUTTON");
      amountButton.className = 'button-amount';
      amountButton.textContent = 'Ile';
      amountButton.key = encIndex;
      amountButton.addEventListener('click', function(){
        enclosures[this.key].getAnimalsAmount();
      });
      newAnimalDiv.appendChild(amountButton);


      enclosure.animals.forEach(function(animal, index){
        var animalRow = document.createElement("DIV");
        animalRow.className = 'animal-row';

        var animalImage = document.createElement("DIV");
        animalImage.className = 'animal-image';
        var img = document.createElement("IMG");

        if(animal.getAnimalType() == 'Krokodyl nilowy'){
          img.src = 'img/krokodyl-nilowy.jpg';
        } else if(animal.getAnimalType() == 'Krokodyl amerykanski'){
          img.src = 'img/krokodyl-amerykanski.jpg';
        } else if(animal.getAnimalType() == 'Lemur'){
          img.src = 'img/lemur.jpg';
        } else if(animal.getAnimalType() == 'Krokodyl nilowy alfa'){
          img.src = 'img/krokodyl-alfa.jpg';
        }


        animalImage.appendChild(img);

        var animalName = document.createElement("DIV");
        animalName.className = 'animal-name';
        var name = document.createElement("SPAN");
        var nameText = document.createTextNode(animal.getAnimalType() + " " + animal.getName());
        name.appendChild(nameText);
        animalName.appendChild(name);


        var speech = document.createElement("DIV");
        speech.className = 'speech';
        var divCircleOne = document.createElement("DIV");
        speech.appendChild(divCircleOne);
        var divCircleTwo = document.createElement("DIV");
        speech.appendChild(divCircleTwo);
        var divCircleThree = document.createElement("DIV");
        var divSpan = document.createElement("SPAN");

        var hungry = true;
        var divSpanText = null;
        if(!animal.isHungry()){
          divSpanText = document.createTextNode(':)');
        } else{
          divSpanText = document.createTextNode(':(');
        }


        divSpan.appendChild(divSpanText);
        divCircleThree.appendChild(divSpan);
        speech.appendChild(divCircleThree);

        animalRow.appendChild(animalImage);
        animalRow.appendChild(animalName);
        animalRow.appendChild(speech);

        animalRow.addEventListener('click', function(){

          var popup = document.getElementById('info-popup');
          popup.style.display = 'block';

          var popup = document.getElementById('info-list');

          while (popup.firstChild) {
              popup.removeChild(popup.firstChild);
          }

          var iAnimalName = document.createElement("H3");
          var iAnimalNameText = document.createTextNode(animal.getName());
          iAnimalName.appendChild(iAnimalNameText);
          popup.appendChild(iAnimalName);

          animal.getInfo().forEach(function(myString){
            var info = document.createElement("P");
            var infoText = document.createTextNode(myString);
            info.appendChild(infoText);
            popup.appendChild(info);
          });

        });

        //enclosureItem.appendChild(animalRow);
        enclosureItem.insertBefore(animalRow, enclosureItem.childNodes[0]);
      });

      //enclosureItem.appendChild(newAnimalDiv);
      enclosureItem.insertBefore(newAnimalDiv,enclosureItem.childNodes[0]);
      enclosureItem.insertBefore(enclosureName,enclosureItem.childNodes[0]);
      enclosureList.insertBefore(enclosureItem, enclosureList.childNodes[0]);
      //enclosureItem.appendChild(enclosureName);
    });
  }

  wypisz(){
    console.log("Hello")
  }
}
