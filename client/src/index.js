//var Bank = require('./bank/bank.js');
//var Account = require('./bank/account.js');
//var sampleAccounts = require('./sample.json');
var React = require('react');
var ReactDOM = require('react-dom');
//var BankBox = require('./components/BankBox.jsx')

//var bank = new Bank(); this become items
//for(var account of sampleAccounts){
//  bank.addAccount(account);
//}

window.onload = function(){
  ReactDOM.render(
    // <BankBox bank={bank}></BankBox>,
    <h1> test</h1>,
    document.getElementById('app')
  );

};
