var Cart = require('../cart');
var Item = require('../Item');
var assert = require('assert');

describe('cart', function(){

  it('should start off with no items ', function(){
    var cart = new Cart();
    assert.equal(0, cart.getItems().length);
  });

  it('should start off with no vouchers ', function(){
    var cart = new Cart();
    assert.equal(0, cart.getVoucher());
  });

  it('should be able to set the number of vouchers ', function(){
    var cart = new Cart();
    cart.setVoucher(2)
    assert.equal(2, cart.getVoucher());
  });

  it('should be able to add item', function(){
    var cart = new Cart();
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    });
    cart.addItem(item,1);
    assert.equal(1, cart.getItems()[0]['quantity']);
  });

  it('should be able to update quantity when add item', function(){
    var cart = new Cart();
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    });
    cart.addItem(item,1);
    cart.addItem(item,1);
    assert.equal(2, cart.getItems()[0]['quantity']);
  });

  it('should be able to remove an item', function(){
    var cart = new Cart();
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    });
    cart.addItem(item,1);
    cart.removeItem(item);
    assert.equal(0, cart.getItems().length);
  });

  it('should be able to calculate total price', function(){
    var cart = new Cart();
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    });
    var item1 = new Item({
      "id": 12,
      "productName": "Mid Twist Cut-Out Dress, Pink",
      "category": "Women Formalwear",
      "price": 540.00,
    })
    cart.addItem(item,1);
    cart.addItem(item,1);
    cart.addItem(item1,1);
    assert.equal(690, cart.totPrice());
  });  

})
