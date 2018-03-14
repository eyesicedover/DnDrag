import { Battle } from './../js/battle.js';
import { Character } from './../js/character.js';
import { Enemy } from './../js/enemy.js';

describe ("Battle", function () {
  it("will take away hp from enemy or player based on action", function() {
    let newPlayer = new Character();
    newPlayer.createGlamazon();
    let newEnemy = new Enemy();
    newEnemy.createImp();
    newPlayer.action = "slay";
    let newBattle = new Battle(newPlayer, newEnemy);

    newBattle.battle();

    expect(newBattle.player.hp).not.toBeGreaterThan(newPlayer.hp);
    expect(newBattle.enemy.hp).not.toBeGreaterThan(newEnemy.hp);
  })

  it("will give a random number between 1 and 20", function() {
    let newBattle = new Battle();
    let number = newBattle.roll();

    expect(number).toBeLessThan(21);
  })

})
