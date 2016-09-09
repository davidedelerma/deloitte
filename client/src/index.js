var Cart = require('./retail/cart.js');
var User = require('./retail/user.js');
//var sampleAccounts = require('./sample.json');
var React = require('react');
var ReactDOM = require('react-dom');
var ShopBox = require('./components/ShopBox.jsx')

//var shop = new Shop(); 
//for(var account of sampleAccounts){
//  bank.addAccount(account);
//}
var cart = new Cart();
var user = new User("Davide", 10000, cart, 3, 4, 5); 
window.onload = function(){
  ReactDOM.render(
    <ShopBox user={user}/>,
    document.getElementById('app')
  );

};
