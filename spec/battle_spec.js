import { Battle } from './../js/battle.js';
import { Character } from './../js/character.js';
import { Enemy } from './../js/enemy.js';
import { Item } from './../js/item.js';

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

  it("will determine winner in battle and add xp to player based on enemy", function() {
    let newPlayer = new Character();
    newPlayer.createGlamazon();
    let newEnemy = new Enemy();
    newEnemy.createImp();
    newPlayer.action = "slay";
    let newBattle = new Battle(newPlayer, newEnemy);
    newBattle.enemy.hp = 0;

    let winner = newBattle.determineWinner();

    expect(winner).toEqual("Honey, you SLAYED your enemy!");
    expect(newBattle.player.xp).toEqual(10);
  })

  it("will determine an item drop after battle", function() {
    //Arrange
    let newPlayer = new Character();
    newPlayer.createGlamazon();
    let newEnemy = new Enemy();
    newEnemy.createImp();
    newPlayer.action = "slay";
    let newBattle = new Battle(newPlayer, newEnemy);
    newBattle.enemy.hp = 0;
    newBattle.determineWinner();
    let testItem = new Item();

    //Act
    newBattle.itemDrop();

    //Assert
    expect(typeof testItem.name).toEqual(typeof newBattle.item.name);
  })

  it("will determine if an item is picked up after battle", function() {
    //Arrange
    let newPlayer = new Character();
    newPlayer.createGlamazon();
    let newEnemy = new Enemy();
    newEnemy.createImp();
    newPlayer.action = "slay";
    let newBattle = new Battle(newPlayer, newEnemy);
    newBattle.enemy.hp = 0;
    newBattle.determineWinner();
    let testItem = new Item();
    newBattle.itemDrop();

    //Act
    newPlayer = newBattle.itemPickup(true);

    //Assert
    expect(newPlayer.inventory.length).toEqual(1);
  })

  it("will test for the player leveling up", function() {
    //Arrange
    let newPlayer = new Character();
    newPlayer.createGlamazon();
    let newEnemy = new Enemy();
    newEnemy.createImp();
    newPlayer.action = "slay";
    let newBattle = new Battle(newPlayer, newEnemy);
    newBattle.enemy.hp = 0;
    newBattle.determineWinner();
    newBattle.player.xp = 25;

    //Act
    newBattle.lvlUp();
    //Assert
    expect(newBattle.player.lvl).toEqual(2);
    expect(newBattle.player.fierce).toEqual(9);
  })

})
