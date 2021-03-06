var React = require('react');

var CartProduct = React.createClass({
    
  deleteProduct: function(){
    this.props.removeFromCart(this.props.product)
  },

  render:function(){
    return(
      <div>
        <h4> Product Name: {this.props.product.productName}</h4>
        <p> Price: {this.props.product.price} £ - Quantity: {this.props.product.quantity}</p>
        <button className='addremove-button' onClick={this.deleteProduct}>remove</button>
      </div>
    )
  }

})

module.exports = CartProduct

