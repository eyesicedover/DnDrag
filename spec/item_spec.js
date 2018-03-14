import { Item } from './../js/item.js';


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
    let newItem = new Item();

    //Act
    newItem.makeup();

    //Assert
    expect(newItem.name).toEqual("makeup");
    expect(newItem.type).toEqual("fierce");
    expect(newItem.value).toEqual(2);
  })

  it("will validate that a new instance ductTape item has correct values", function() {
    //Arrange
    let newItem = new Item();

    //Act
    newItem.ductTape();

    //Assert
    expect(newItem.name).toEqual("duct tape");
    expect(newItem.type).toEqual("fierce");
    expect(newItem.value).toEqual(1);
  })

  it("will validate that a new instance heels item has correct values", function() {
    //Arrange
    let newItem = new Item();

    //Act
    newItem.heels();

    //Assert
    expect(newItem.name).toEqual("heels");
    expect(newItem.type).toEqual("fierce");
    expect(newItem.value).toEqual(2);
  })

  it("will validate that a new instance sunglasses item has correct values", function() {
    //Arrange
    let newItem = new Item();

    //Act
    newItem.sunglasses();

    //Assert
    expect(newItem.name).toEqual("sunglasses");
    expect(newItem.type).toEqual("shade");
    expect(newItem.value).toEqual(1);
  })

  it("will validate that a new instance alcohol item has correct values", function() {
    //Arrange
    let newItem = new Item();

    //Act
    newItem.alcohol();

    //Assert
    expect(newItem.name).toEqual("alcohol");
    expect(newItem.type).toEqual("shade");
    expect(newItem.value).toEqual(2);
  })
});
