import { Character } from './../js/character';
import { Item } from './../js/item';
import { Battle} from './../js/battle';
import { Enemy } from './../js/enemy';
import './styles.css';


function updateBattle(newCharacter, newEnemy) {
  $("#health").text("Health: " + newCharacter.hp);
  $("#armor").text("Armor Class: " + newCharacter.ac);
  $("#fierce").text("Fierce: " + newCharacter.fierce);
  $("#shade").text("Shade: " + newCharacter.shade);
  $("#style").text("Style: " + newCharacter.style);
  $("#enemyHealth").text("Health: " + newEnemy.hp);
  $("#enemyArmor").text("Armor Class: " + newEnemy.ac);
  $("#enemyAttack").text("Attack: " + newEnemy.attack);
}

$(document).ready(function() {
  let newCharacter = new Character();
  let newEnemy = new Enemy();

  $("button#toggleClass").click(function() {
    $(".classDescriptions").toggle();
  });

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
    newEnemy = newEnemy.determineEnemy(newCharacter.lvl);
    $(".insertNameHere").text(newCharacter.name);
    $(".insertTypeHere").text(newCharacter.type);
    $(".insertEnemyHere").text(newEnemy.name);
    updateBattle(newCharacter, newEnemy);
    $(".creation").fadeOut();
    $(".game").fadeIn(3000);
  });

  $("form.act").submit(function(event){
    event.preventDefault();
    let action = $("input:radio[name=action]:checked").val();
    newCharacter.action = action;
    let newBattle = new Battle(newCharacter, newEnemy);
    newBattle.battle();
    newBattle.player = newCharacter;
    newBattle.enemy = newEnemy;
    updateBattle(newCharacter, newEnemy);
    let winnerText = newBattle.determineWinner();
    // if (winnerText == "Honey, you SLAYED your enemy!") {
    // } else if (winnerText == "You lost.... sashay away.") {
    //
    // }
  });



});
