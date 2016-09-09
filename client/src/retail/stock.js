var Stock = function(items){
  this.items = items 
};


Stock.prototype = {

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
