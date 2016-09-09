
var Cart = function(){
  this._items = [];
  this._totalPrice = '';
}

Cart.prototype = {
  
  findItemById:function(item){
    var index = -1
    this._items.forEach(function(itemInCart){
      if (item.id === itemInCart.id){
        index+=1
      }
    })
    return index
  },

  addItem: function(item, quantity){
    if (this.findItemById(item) == -1){
      item['quantity'] = quantity
      this._items.push(item);
    } else {
      var index = this.findItemById(item)
      this._items[index]['quantity'] += quantity
    }    
  },

  getItems: function(){
    return this._items
  },

  getTotPrice: function(){
    return this._totalPrice
  },

  updateTotPrice: function(amount){
    this._totalPrice -= amount
  },

  removeItem: function(item){
    if (this.findItemById(item) != -1){
      var index = this.findItemById(item)
      if (this._items[index].quantity>1){
        this._items[index].quantity -= 1
      } else{
        this._items.splice(index, 1);
      }
    }
  },

  totPrice: function(){
    this._totalPrice = 0
    this._items.forEach(function(item){
      this._totalPrice += item.price * item.quantity
    }.bind(this))
  },

  empty: function(){
    this._items = []
  }
}


module.exports = Cart;
