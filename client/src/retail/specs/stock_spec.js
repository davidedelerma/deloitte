var Stock = require('../stock');
var Item = require('../Item');
var assert = require('assert');

describe('stock', function(){

  beforeEach(function () {
      items = [ 
        {
          "id": 0,
          "productName": "Almond Toe Court Shoes, Patent Black",
          "category": "Women Footwear",
          "price": 99.00,
          "quantity": 5
        },
        {
          "id": 1,
          "productName": "Suede Shoes, Blue",
          "category": "Women Footwear",
          "price": 42.00,
          "quantity": 4
        }
      ]
      stock = new Stock(items); 
  });

  it('should start off with items ', function(){  
    assert.equal(2, stock.items.length);
  });

  it('should be able to remove items ', function(){  
    stock.removeItem(items[0], 1)
    assert.equal(4, stock.items[0].quantity);
  });

  it('should not be able to remove items if quantity more than stock ', function(){  
    stock.removeItem(items[0], 1)
    assert.equal(false, stock.removeItem(items[0], 6));
  });

})