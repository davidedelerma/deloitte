//var Bank = require('./bank/bank.js');
//var Account = require('./bank/account.js');
//var sampleAccounts = require('./sample.json');
var React = require('react');
var ReactDOM = require('react-dom');
var ShopBox = require('./components/ShopBox.jsx')

//var shop = new Shop(); 
//for(var account of sampleAccounts){
//  bank.addAccount(account);
//}

window.onload = function(){
  ReactDOM.render(
    <ShopBox />,
    document.getElementById('app')
  );

};
