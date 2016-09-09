var User = function(name, balance, cart, voucher0, voucher10, voucher15){
  this._voucher0 = voucher0;
  this._voucher10 = voucher10;
  this._voucher15 = voucher15;
  this._name = name;
  this._balance = balance;
  this.cart = cart
}

User.prototype = {
  getName: function(){
    return this._name
  },
  getBalance: function(){
    return this._balance
  },
  getNbOfVouchers0: function(){
    return this._voucher0
  },
  getNbOfVouchers10: function(){
    return this._voucher10
  },
  getNbOfVouchers15: function(){
    return this._voucher15
  },
  updateVoucher0: function(){
    if(this._voucher0 > 1){
      this._voucher0 -= 1
    }
  },
  updateVoucher10: function(){
    if(this._voucher10 > 1){
      this._voucher10 -= 1
    }
  },
  updateVoucher15: function(){
    if(this._voucher15 > 1){
      this._voucher15 -= 1
    }
  },

  checkout: function(){
    this.cart.totPrice()
    if(this._balance > this.cart.getTotPrice()){
      this._balance -= this.cart.getTotPrice()
      this.cart.empty()
      return true
    }
    return false
  }

}
module.exports = User