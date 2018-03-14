import { Item } from './../js/item.js';

describe ("Item", function () {
  it("will validate that a new instance of item", function() {
    //Arrange, Act
    let newItem = new Item();

    //Assert
    expect(newItem.stats).toEqual([]);
  })

  it("will validate that a new instance sunglasses item has correct values", function() {
    //Arrange
    let newItemSunglasses = new Item();

    //Act
    newItemSunglasses.sunglasses();

    //Assert
    expect(newItem.stats).toEqual(["sunglasses", "shade", 2]);
  }
});
