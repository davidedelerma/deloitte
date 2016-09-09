var React = require('react');
var CartProduct = require('./CartProduct')

var CartList = React.createClass({

  render: function(){
    var productListItems = this.props.products.map(function(product, key){
      return (
        <CartProduct key={product.id} product={product} removeFromCart={this.props.removeFromCart}
        />
      )
    }.bind(this))
    return(
      <ul>
        {productListItems}
      </ul>
    )
  }
})

module.exports = CartList;