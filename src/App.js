class App{
  render(data){
    var enclosuresNode = document.getElementById("enclosures");
    while (enclosuresNode.firstChild) {
        enclosuresNode.removeChild(enclosuresNode.firstChild);
    }
    data.forEach(function(enclosure, encIndex){
      var enclosureList = document.getElementById('enclosures');
      var enclosureItem = document.createElement("LI");

      var enclosureName = document.createElement("H2");
      var enclosureNameText = document.createTextNode(enclosure.getName());
      enclosureName.appendChild(enclosureNameText);
      enclosureItem.appendChild(enclosureName);

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
          divSpanText = document.createTextNode('N & N');
        } else{
          divSpanText = document.createTextNode('G & S');
        }


        divSpan.appendChild(divSpanText);
        divCircleThree.appendChild(divSpan);
        speech.appendChild(divCircleThree);

        animalRow.appendChild(animalImage);
        animalRow.appendChild(animalName);
        animalRow.appendChild(speech);

        animalRow.addEventListener('click', function(){
          //this.style.background = 'white';
          //this.childNodes[2].style.display = 'none';

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

        enclosureItem.appendChild(animalRow);
      });

      enclosureList.insertBefore(enclosureItem, enclosureList.childNodes[0])
    });
  }

}
