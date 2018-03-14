import { Character } from './../js/character.js';
import { Item } from './../js/item.js';


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
});

describe ("Item", function () {
  it("will validate that a new instance of item", function() {
    //Arrange, Act
    let newItem = new Item();

    //Assert
    expect(newItem.name).toEqual("");
    expect(newItem.type).toEqual("");
    expect(newItem.value).toEqual(0);
  })

  it("will validate that a new instance makeup item has correct values", function() {
    //Arrange
    let newItemMakeup = new Item();

    //Act
    newItemMakeup.makeup();

    //Assert
    expect(newItem.name).toEqual("makeup");
    expect(newItem.type).toEqual("fierce");
    expect(newItem.value).toEqual(2);
  }

  it("will validate that a new instance ductTape item has correct values", function() {
    //Arrange
    let newItemDuctTape = new Item();

    //Act
    newItemDuctTape.ductTape();

    //Assert
    expect(newItem.name).toEqual("duct tape");
    expect(newItem.type).toEqual("fierce");
    expect(newItem.value).toEqual(1);
  }

  it("will validate that a new instance heels item has correct values", function() {
    //Arrange
    let newItemHeels = new Item();

    //Act
    newItemHeels.heels();

    //Assert
    expect(newItem.name).toEqual("heels");
    expect(newItem.type).toEqual("fierce");
    expect(newItem.value).toEqual(1);
  }

  it("will validate that a new instance sunglasses item has correct values", function() {
    //Arrange
    let newItemSunglasses = new Item();

    //Act
    newItemSunglasses.sunglasses();

    //Assert
    expect(newItem.name).toEqual("sunglasses");
    expect(newItem.type).toEqual("shade");
    expect(newItem.value).toEqual(1);
  }

  it("will validate that a new instance alcohol item has correct values", function() {
    //Arrange
    let newItemAlcohol = new Item();

    //Act
    newItemAlcohol.sunglasses();

    //Assert
    expect(newItem.name).toEqual("alcohol");
    expect(newItem.type).toEqual("shade");
    expect(newItem.value).toEqual(2);
  }
});
