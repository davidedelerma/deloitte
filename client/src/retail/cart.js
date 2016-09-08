
var Cart = function(){
  this._voucher = 0
  this._items = [];
}

Cart.prototype = {
  
  addItem: function(item, quantity){
    //if it doesn't exsist push  and quantity 0 else quanty +1
    if (this._items.indexOf(item) == -1){
      // just use quantity for everithyng
      item['quantity'] = quantity
      this._items.push(item);
    } else {
      var index = this._items.indexOf(item)
      this._items[index]['quantity'] += quantity
    }    
  },

  getItems: function(){
    return this._items
  },

  getVoucher: function(){
    return this._voucher
  },

  setVoucher: function(nbOfVoucher){
    this._voucher = nbOfVoucher
  },

  removeItem: function(item){
    if (this._items.indexOf(item) != -1){
      var index = this._items.indexOf(item)
      this._items.splice(index, 1);
    }
  },

  totPrice: function(){
    var totalPrice = 0
    this._items.forEach(function(item){
      totalPrice += item.price * item.quantity
    })
   return totalPrice
  }
}


module.exports = Cart;
