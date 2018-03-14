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

  it("will validate that a new instance sunglasses item has correct values", function() {
    //Arrange
    let newItemSunglasses = new Item();

    //Act
    newItemSunglasses.sunglasses();

    //Assert
    expect(newItem.name).toEqual("sunglasses");
    expect(newItem.type).toEqual("shade");
    expect(newItem.value).toEqual(2);
  }
});
