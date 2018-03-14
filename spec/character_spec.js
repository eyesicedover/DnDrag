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

  it("will validate that character has correct values when initialized", function() {
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
})
