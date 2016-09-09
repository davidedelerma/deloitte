var React = require('react');
var CartList = require('./CartList.jsx');

var CartBox = React.createClass({
  render: function(){
    return (
      <div>
        <CartList products={ this.props.products } removeFromCart = {this.props.removeFromCart}></CartList>

      </div>
    )
  }
})

module.exports = CartBox;