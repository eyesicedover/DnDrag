import { Character } from './../js/character';
import { Item } from './../js/item';
import { Battle} from './../js/battle';
import { Enemy } from './../js/enemy';
import './styles.css';

$(document).ready(function() {
  let newCharacter = new Character();
  $(".createQueen").submit(function(event) {
    event.preventDefault();
    let name = $("input#dragName").val();
    let type = $("input:radio[name=dragClass]:checked").val();
    newCharacter.name = name;
    newCharacter.type = type;
    if (type == "glamazon") {
      newCharacter.createGlamazon();
    } else if (type == "cheesecake") {
      newCharacter.createCheesecake();
    } else {
      newCharacter.createHeather();
    }
  });
});
