import { Enemy } from './../js/enemy.js';

describe ("Enemy", function () {
  it("will validate that a new instance of enemy", function() {
    //Arrange, Act
    let newEnemy = new Enemy();

    //Assert
    expect(newEnemy.name).toEqual("");
    expect(newEnemy.hp).toEqual(0);
    expect(newEnemy.ac).toEqual(0);
    expect(newEnemy.xp).toEqual(0);
    expect(newEnemy.attack).toEqual(0);

  })

  it("will validate that a new instance of Imp has correct values", function() {
    //Arrange
    let newEnemy = new Enemy();

    //Act
    newEnemy.createImp();

    //Assert
    expect(newEnemy.name).toEqual("Imp");
    expect(newEnemy.hp).toEqual(10);
    expect(newEnemy.ac).toEqual(9);
    expect(newEnemy.xp).toEqual(10);
    expect(newEnemy.attack).toEqual(2);
  })

  it("will validate that a new instance of Goblin has correct values", function() {
    //Arrange
    let newEnemy = new Enemy();

    //Act
    newEnemy.createGoblin();

    //Assert
    expect(newEnemy.name).toEqual("Goblin");
    expect(newEnemy.hp).toEqual(14);
    expect(newEnemy.ac).toEqual(11);
    expect(newEnemy.xp).toEqual(15);
    expect(newEnemy.attack).toEqual(3);
  })

  it("will validate that a new instance of Zombie has correct values", function() {
    //Arrange
    let newEnemy = new Enemy();

    //Act
    newEnemy.createZombie();

    //Assert
    expect(newEnemy.name).toEqual("Zombie");
    expect(newEnemy.hp).toEqual(18);
    expect(newEnemy.ac).toEqual(13);
    expect(newEnemy.xp).toEqual(25);
    expect(newEnemy.attack).toEqual(4);
  })

  it("will validate that a new instance of Giant Spider has correct values", function() {
    //Arrange
    let newEnemy = new Enemy();

    //Act
    newEnemy.createGiantSpider();

    //Assert
    expect(newEnemy.name).toEqual("Giant Spider");
    expect(newEnemy.hp).toEqual(20);
    expect(newEnemy.ac).toEqual(14);
    expect(newEnemy.xp).toEqual(35);
    expect(newEnemy.attack).toEqual(5);
  })

  it("will validate that a new instance of Necromancer has correct values", function() {
    //Arrange
    let newEnemy = new Enemy();

    //Act
    newEnemy.createNecromancer();

    //Assert
    expect(newEnemy.name).toEqual("Necromancer");
    expect(newEnemy.hp).toEqual(20);
    expect(newEnemy.ac).toEqual(16);
    expect(newEnemy.xp).toEqual(45);
    expect(newEnemy.attack).toEqual(6);
  })

  it("will determine the enemy based on a players level", function() {
    //Arrange
    let newEnemy = new Enemy();

    //Act
    newEnemy = newEnemy.determineEnemy(4);

    //Assert
    expect(newEnemy.name).toEqual("Necromancer");

  })
});
