
var Cart = function(){
  this.items = [];
}

Cart.prototype = {
  
  addItem: function(item, quantity){
    //if it doesn't exsist push  and quantity 0 else quanty +1
    if (this.items.indexOf(item) == -1){
      // just use quantity for everithyng
      item['quantity'] = quantity
      this.items.push(item);
    } else {
      var index = this.items.indexOf(item)
      this.items[index]['quantity'] += quantity
    }    
  },

  removeItem: function(item){
    if (this.items.indexOf(item) != -1){
      var index = this.items.indexOf(item)
      this.items.splice(index, 1);
    }
  },

  totPrice: function(){
    var totalPrice = 0
    this.items.forEach(function(item){
      totalPrice += item.price * item.quantity
    })
   return totalPrice
  }

//   findAccountByOwnerName:function(ownerName){
//     var foundAccount = null;
//     for (var account of this.accounts) {
//       if(account.owner === ownerName){
//         foundAccount = account;
//       }
//     }
//     return foundAccount;
//   },

//   filteredAccounts: function(type){
//     if(!type) return this.accounts
//     var filteredAccounts = [];
//     for (var account of this.accounts) {
//       if(type === account.type)
//         filteredAccounts.push(account);
//     }
//     return filteredAccounts;
//   },
//   totalCash:function(type){
//     var total = 0;
//     for (var account of this.filteredAccounts(type)) {
//       total += account.amount;
//     }
//     return total;
//   },
//   accountAverage:function(){
//     return this.totalCash()/this.accounts.length;
//   },
//   payInterest(percentage){
//     var multiplier = 1 + (percentage/100)
//     for(var account of this.accounts){
//       account.amount = account.amount * multiplier
//     }
//   }
}


module.exports = Cart;
