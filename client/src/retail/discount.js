
var Discount = function(){
  this.totalPrice=''
}

Discount.prototype = {

  applyDiscount: function( spentOver, discount , cartPrice) {    
    if ( cartPrice > spentOver ) {
      this.totalPrice = cartPrice-discount
      return true
    }    
    return false;
  }

}

module.exports = Discount;