import { Character } from './../js/character.js';

describe ("Character", function () {

  it("will validate that a new instance of character has correct values", function() {
    //Arrange, Act
    let newCharacter = new Character();


    //Assert
    expect(newCharacter.fierce).toEqual(0);
    expect(newCharacter.shade).toEqual(0);
    expect(newCharacter.style).toEqual(0);
    expect(newCharacter.hp).toEqual(0);
    expect(newCharacter.ac).toEqual(0);
    expect(newCharacter.xp).toEqual(0);
    expect(newCharacter.inventory).toEqual([]);
  })

  it("will validate that setName will alter new Character name attribute", function() {
    //Arrange
    let newCharacter = new Character();

    //Act
    newCharacter.setName("Felicia");

    //Arrange
    expect(newCharacter.name).toEqual("Felicia");
  })

  it("will validate that Glamazon character has correct values when initialized", function() {
    //Arrange
    let newCharacter = new Character();

    //Act
    newCharacter.createGlamazon();

    //Assert
    expect(newCharacter.fierce).toEqual(6);
    expect(newCharacter.shade).toEqual(2);
    expect(newCharacter.style).toEqual(4);
    expect(newCharacter.hp).toEqual(8);
    expect(newCharacter.ac).toEqual(4);
  })

  it("will validate that Cheescake character has correct values when initialized", function() {
    //Arrange
    let newCharacter = new Character();

    //Act
    newCharacter.createCheesecake();

    //Assert
    expect(newCharacter.fierce).toEqual(2);
    expect(newCharacter.shade).toEqual(4);
    expect(newCharacter.style).toEqual(6);
    expect(newCharacter.hp).toEqual(6);
    expect(newCharacter.ac).toEqual(6);
  })

  it("will validate that Heather character has correct values when initialized", function() {
    //Arrange
    let newCharacter = new Character();

    //Act
    newCharacter.createHeather();

    //Assert
    expect(newCharacter.fierce).toEqual(2);
    expect(newCharacter.shade).toEqual(6);
    expect(newCharacter.style).toEqual(4);
    expect(newCharacter.hp).toEqual(4);
    expect(newCharacter.ac).toEqual(8);
  })
})
