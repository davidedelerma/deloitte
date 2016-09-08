
var Discount = function(){
}

Discount.prototype = {

  applyDiscount: function( spentOver, discount , cart) {
    if (cart.getVoucher() >= 1 ){  
      if ( cart.totPrice() > spentOver ) {
        cart.setVoucher(cart.getVoucher() - 1)
        return ( cart.totPrice() - discount );
      }
    }
    return false;
  }

}

module.exports = Discount;