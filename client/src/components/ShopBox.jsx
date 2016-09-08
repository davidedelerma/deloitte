var React = require('react');
var ProductsBox = require('./ProductsBox');

var sampleProducts = require('../sample.json');
var Stock = require('../retail/stock.js');

var ShopBox = React.createClass({

  getInitialState: function() {
    return { products: sampleProducts, selectedProduct: null }
  },

  showDetails: function(product){
    this.setState({selectedProduct: product})
  },

  render: function(){
    var stock = new Stock (sampleProducts);

    return (
      <div>
        <h1> bok </h1>
        <ProductsBox
          products = {stock.items}
          showDetails = {this.showDetails}
          selectedProduct = {this.state.selectedProduct}
         >
         </ProductsBox> 
      </div>
    )
  
  }

})

module.exports = ShopBox;