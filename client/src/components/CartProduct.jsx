var React = require('react');

var CartProduct = React.createClass({
    
  deleteProduct: function(){
    this.props.removeFromCart(this.props.product)
    console.log('remove button')
  },

  render:function(){
    return(
      <div>
        <h4> Product Name: {this.props.product.productName}</h4>
        <p> Price: {this.props.product.price} £ - Quantity: {this.props.product.quantity}</p>
        <button onClick={this.deleteProduct}>remove</button>
      </div>
    )
  }

})

module.exports = CartProduct

