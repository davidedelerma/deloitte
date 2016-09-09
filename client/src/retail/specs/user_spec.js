var Cart = require('../cart');
var Item = require('../item');
var User = require('../user');
var assert = require('assert');

describe('user', function(){

  beforeEach(function () {
    cart = new Cart();
    item = new Item({
      "id": 9,
      "productName": "Sharkskin Waistcoat, Charcoal",
      "category": "Man Formalwear",
      "price": 75.00,
    });
    cart.addItem(item,1);
    user = new User("Davide", 10000, cart, 3, 4, 5); 
  });

  it('should have a name ', function(){  
    assert.equal("Davide", user.name);
  });

  it('should have a budget ', function(){  
    assert.equal(10000, user.balance);
  });

  it('should ba able to update voucher0', function(){  
    user.updateVoucher0()
    assert.equal(2, user.voucher0);
  });

  it('should ba able to update voucher10', function(){  
    user.updateVoucher10()
    assert.equal(3, user.voucher10);
  });

  it('should ba able to update voucher15', function(){  
    user.updateVoucher15()
    assert.equal(4, user.voucher15);
  });

})




