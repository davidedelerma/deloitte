var React = require('react');
var ProductsList = require('./ProductsList.jsx');

var ProductsBox = React.createClass({
  render: function(){
    return (
      <div>
        <ProductsList products={ this.props.products } addProduct = {this.props.addProduct}></ProductsList>

      </div>
    )
  }
})

module.exports = ProductsBox;