var Discount = require('../discount');
var Cart = require('../cart');
var Item = require('../item');
var assert = require('assert');

describe('discount', function(){

  it('should be able to apply 5£ off totPrice ', function(){
    var cart = new Cart()
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    })
    var item1 = new Item({
      "id": 12,
      "productName": "Mid Twist Cut-Out Dress, Pink",
      "category": "Women Formalwear",
      "price": 540.00,
    })
    cart.addItem(item,1);
    cart.addItem(item,1);
    cart.addItem(item1,1);
    cart.totPrice()
    var discount = new Discount()
    discount.applyDiscount(0, 5, cart.totalPrice)
    assert.equal(685, discount.totalPrice)
  });

  it('should be able to apply 10£ off when totPrice more than 50 ', function(){
    var cart = new Cart()
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    })
    var item1 = new Item({
      "id": 12,
      "productName": "Mid Twist Cut-Out Dress, Pink",
      "category": "Women Formalwear",
      "price": 540.00,
    })
    cart.addItem(item,1);
    cart.addItem(item,1);
    cart.addItem(item1,1);
    cart.totPrice()
    var discount = new Discount()
    discount.applyDiscount(50, 10, cart.totalPrice)
    assert.equal(680, discount.totalPrice)
  });

  it('should not be able to apply 10£ off when totPrice less than 50 ', function(){
    var cart = new Cart()
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 15.00,
    })
    cart.addItem(item,1);
    cart.totPrice()
    var discount = new Discount()
    assert.equal(false, discount.applyDiscount(50, 10, cart.totalPrice))
  });

  it('should be able to apply 15£ off when totPrice more than 75 ', function(){
    var cart = new Cart()
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    })
    var item1 = new Item({
      "id": 12,
      "productName": "Mid Twist Cut-Out Dress, Pink",
      "category": "Women Formalwear",
      "price": 540.00,
    })
    cart.addItem(item,1);
    cart.addItem(item,1);
    cart.addItem(item1,1);
    cart.totPrice()
    var discount = new Discount()
    discount.applyDiscount(75, 15, cart.totalPrice)
    assert.equal(675, discount.totalPrice)
  });

  it('should not be able to apply 15£ off when totPrice less than 75 ', function(){
    var cart = new Cart()
    var item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 15.00,
    })
    cart.addItem(item,1);
    cart.totPrice()
    var discount = new Discount()
    assert.equal(false, discount.applyDiscount(75, 15, cart.totalPrice))
  });


})