var Item = require('../item');
var assert = require('assert');

describe('item', function(){
  it('should have a product name', function(){
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
      });
    assert.equal(item.productName, 'Sharkskin Waistcoat, Charcoal');
  });

  it('should have an id', function(){
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
      });
    assert.equal(item.id, 9);
  });

  it('should have a category', function(){
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
      });
    assert.equal(item.category, "Man Formalwear");
  });

  it('should have a price', function(){
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
      });
    assert.equal(item.price, 75.00);
  });

})
