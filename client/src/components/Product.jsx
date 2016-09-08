var React = require('react');

var Product = React.createClass({
    
  showDetails: function(){
    console.log('It is only the beginning')
  },

  render:function(){
    return(
      <div>
        <h4> Product Name: {this.props.product.productName}</h4>
        <p> Category: {this.props.product.category}</p>
        <p> Price: {this.props.product.price} £</p>
        <p> Quantity in stock: {this.props.product.quantity}</p>
        <button onClick={this.showDetails}>add</button>
      </div>
    )
  }

})

module.exports = Product

