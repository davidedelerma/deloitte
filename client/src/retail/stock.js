var Stock = function(items){
  this.items = items 
};


Stock.prototype = {

  findItemById:function(item){
    var index = -1
    this.items.forEach(function(itemInCart){
      if (item.id === itemInCart.id){
        index+=1
      }
    })
    return index
  },

  addExsitingItem: function(item){
    if (this.findItemById(item) != -1){
      var index = this.findItemById(item)
      this.items[index].quantity += 1
    }
  },

  removeItem: function(item, quantity){
    var index = this.items.indexOf(item)
    if(this.items[index].quantity >= quantity){
      this.items[index].quantity -= quantity
    } else {return false}
  }
}
module.exports = Stock;
