
var Discount = function(){
}

Discount.prototype = {

  applyDiscount: function( spentOver, discount , cart) {    
    cart.totPrice()      
    if ( cart.getTotPrice() > spentOver ) {
      cart.updateTotPrice(discount)
      return true
    }    
    return false;
  }

}

module.exports = Discount;