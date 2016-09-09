var React = require('react');

var Product = React.createClass({
    
  addProduct: function(){
    this.props.addProduct(this.props.product)
  },

  render:function(){
         
    if(this.props.product.quantity > 0){
      return(
        <li>
          <h4> Product Name: {this.props.product.productName}</h4>
          <p> Category: {this.props.product.category}</p>
          <p> Price: {this.props.product.price} £</p>
          <p> Quantity in stock: {this.props.product.quantity}</p>
          <button className='addremove-button' onClick={this.addProduct}>add</button>
        </li>
      )
    } else {
      return(
        <li>
          <h4> Product Name: {this.props.product.productName}</h4>
          <p> Category: {this.props.product.category}</p>
          <p> Price: {this.props.product.price} £</p>
          <p> Quantity in stock: {this.props.product.quantity}</p>
          <button className='addremove-pressedbutton' >add</button>
        </li>
      )
    }    
  }

})

module.exports = Product

