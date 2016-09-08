var Discount = require('../Discount');
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
    cart.setVoucher(1);
    console.log(cart.totPrice())
    var discount = new Discount()
    var totPrice = discount.applyDiscount(0, 5, cart)
    assert.equal(685, totPrice)
  });

  it('should reduce the number of vouchers for cart if discount is applied ', function(){
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
    cart.setVoucher(1);
    var discount = new Discount()
    var totPrice = discount.applyDiscount(0, 5, cart)
    assert.equal(0, cart.getVoucher())
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
    cart.setVoucher(1);
    var discount = new Discount()
    var totPrice = discount.applyDiscount(50, 10, cart)
    assert.equal(680, totPrice)
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
    cart.setVoucher(1);
    var discount = new Discount()
    assert.equal(false, discount.applyDiscount(50, 10, cart))
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
    cart.setVoucher(1);
    var discount = new Discount()
    var totPrice = discount.applyDiscount(75, 15, cart)
    assert.equal(675, totPrice)
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
    cart.setVoucher(1);
    var discount = new Discount()
    assert.equal(false, discount.applyDiscount(75, 15, cart))
  });

  it('should not be able to apply discount if not have voucher ', function(){
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
    var discount = new Discount()
    assert.equal(false, discount.applyDiscount(75, 15, cart))
  });

})