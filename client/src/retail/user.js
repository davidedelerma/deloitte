var User = function(name, balance, cart, voucher0, voucher10, voucher15){
  this.voucher0 = voucher0;
  this.voucher10 = voucher10;
  this.voucher15 = voucher15;
  this.name = name;
  this.balance = balance;
  this.cart = cart
}

User.prototype = {

  updateVoucher0: function(){
    if(this.voucher0 > 1){
      this.voucher0 -= 1
    }
  },
  updateVoucher10: function(){
    if(this.voucher10 > 1){
      this.voucher10 -= 1
    }
  },
  updateVoucher15: function(){
    if(this.voucher15 > 1){
      this.voucher15 -= 1
    }
  }

}
module.exports = User