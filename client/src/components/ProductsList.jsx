var React = require('react');
var Product = require('./Product')

var ProductsList = React.createClass({

  render: function(){
    var productListItems = this.props.products.map(function(product, key){
      return (
        <Product key={product.id} product={product} showDetails={ this.props.showDetails }/>
      )
    }.bind(this))
    return(
      <ul>
        {productListItems}
      </ul>
    )
  }
})

module.exports = ProductsList;