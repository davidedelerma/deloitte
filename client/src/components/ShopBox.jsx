var React = require('react');
var ProductsBox = require('./ProductsBox');
var CartBox = require('./CartBox');

var sampleProducts = require('../sample.json');
var Stock = require('../retail/stock.js');
var Cart = require('../retail/cart.js');
var User = require('../retail/user.js');
var Item = require('../retail/item.js');
var ShopBox = React.createClass({

  getInitialState: function() {
    return { products: sampleProducts, selectedProduct: null, cart: [], selectedCartProduct: null, cartPrice: 0 }
  },

  showDetails: function(product){
    this.setState({selectedProduct: product})
  },

  addProduct: function(newProduct){
    var cart = new Cart();
    var stock = new Stock(sampleProducts);
    stock.removeItem(newProduct,1)
    for(var product of this.state.cart){
      cart.addItem(new Item(product),1);
    }
    cart.addItem(new Item(newProduct),1);
    cart.totPrice()
    this.setState({products: stock.items, cart: cart.getItems(), cartPrice: cart.getTotPrice()} )
  },

  removeFromCart: function(item){
    var cart = new Cart();
    var stock = new Stock(this.state.products)
    for(var product of this.state.cart){
      cart.addItem(new Item(product),1);
    }
    cart.removeItem(item)
    cart.totPrice()
    stock.addExsitingItem(item)
    this.setState({products: stock.items, cart:cart.getItems(), cartPrice: cart.getTotPrice()})
  },

  getItemsInCart:function(){
    return this.props.user.cart.getItems()
  },

  render: function(){
    var stock = new Stock (sampleProducts);

    return (
      <div>
        <div className = 'products-box'>
          <h1> Products:  </h1>
          <ProductsBox
            products={ stock.items }
            addProduct={this.addProduct}
            selectedProduct={ this.state.selectedProduct }
          >
          </ProductsBox>
        </div>
        <div className = 'cart-box'>
          <h1> Cart </h1>
          <p> Tot Price: { this.state.cartPrice } £ </p>
          <CartBox
            products={ this.state.cart }
            selectedProduct={ this.state.selectedCartProduct }
            removeFromCart={this.removeFromCart}
          >
          </CartBox>
        </div>
      </div>
    )
  
  }

})

module.exports = ShopBox;