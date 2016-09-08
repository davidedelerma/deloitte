var Stock = function(items){
  this.items = items 
};


Stock.prototype = {

  removeItem: function(item, quantity){
    var index = this.items.indexOf(item)
    if(this.items[index].quantity >= quantity){
      this.items[index].quantity -= quantity
    } else {return false}
  }
}
module.exports = Stock;
