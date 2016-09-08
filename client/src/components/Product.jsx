var React = require('react');

var Product = React.createClass({
    
  showDetails: function(){
    console.log('It is only the beginning')
  },

  render:function(){
    return(
      <div>
        <p> Product Name: {this.props.product.productName}</p>
        <p> Category: {this.props.product.category}</p>
        <p> Price: {this.props.product.price}</p>
        <p> Quantity: {this.props.product.quantity}</p>
        <button onClick={this.showDetails}>add</button>
      </div>
    )
  }

})

module.exports = Product

