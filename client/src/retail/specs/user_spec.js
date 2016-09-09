var Cart = require('../cart');
var Item = require('../item');
var User = require('../user');
var assert = require('assert');

describe('stock', function(){

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
    assert.equal("Davide", user.getName());
  });

  it('should have a budget ', function(){  
    assert.equal(10000, user.getBalance());
  });

  it('should ba able to update voucher0', function(){  
    user.updateVoucher0()
    assert.equal(2, user.getNbOfVouchers0());
  });

  it('should ba able to update voucher10', function(){  
    user.updateVoucher10()
    assert.equal(3, user.getNbOfVouchers10());
  });

  it('should ba able to update voucher15', function(){  
    user.updateVoucher15()
    assert.equal(4, user.getNbOfVouchers15());
  });

  it('should ba able to checkout', function(){  
    user.checkout()
    assert.equal(0, user.cart.getItems().length);
    assert.equal(9925, user.getBalance());
  });
})




