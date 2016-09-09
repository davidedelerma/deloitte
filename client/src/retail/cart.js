
var Cart = function(){
  this.items = [];
  this.totalPrice = '';
}

Cart.prototype = {
  
  findItemById:function(item){
  
    var index = -1;
    for(var i = 0, len = this.items.length; i < len; i++) {
        if (this.items[i].id === item.id) {
            index = i;
            break;
        }
    }
    return index
  },

  addItem: function(item, quantity){
    if (this.findItemById(item) == -1){
      item['quantity'] = quantity
      this.items.push(item);
    } else {
      var index = this.findItemById(item)
      this.items[index].quantity += quantity
    }   
  },

  updateTotPrice: function(amount){
    this.totalPrice -= amount
  },

  removeItem: function(item){
    if (this.findItemById(item) != -1){
      var index = this.findItemById(item)
      if (this.items[index].quantity>1){
        this.items[index].quantity -= 1
      } else{
        this.items.splice(index, 1);
      }
    }
  },

  totPrice: function(){
    this.totalPrice = 0
    this.items.forEach(function(item){
      this.totalPrice += item.price * item.quantity
    }.bind(this))
  },

  empty: function(){
    this.items = []
  }
}


module.exports = Cart;
