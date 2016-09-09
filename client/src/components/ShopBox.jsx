var React = require('react');
var ProductsBox = require('./ProductsBox');
var CartBox = require('./CartBox');

var sampleProducts = require('../sample.json');
var Stock = require('../retail/stock.js');
var Cart = require('../retail/cart.js');
var Discount = require('../retail/discount.js');
var Item = require('../retail/item.js');
var ShopBox = React.createClass({

  getInitialState: function() {
    return { products: sampleProducts, selectedProduct: null, cart: [], selectedCartProduct: null, cartPrice: 0, discountedPrice: 0, counter: 0}
  },

  showDetails: function(product){
    this.setState({selectedProduct: product})
  },

  handleDiscount5: function(){
    var counter = this.state.counter + 1
    this.setState({counter: counter})
    var discount = new Discount()
    if (counter === 1){
      var appliable = discount.applyDiscount(0, 5, this.state.cartPrice)
      if(appliable === true){
        this.setState({discountedPrice: discount.totalPrice})
      } 
      else if (appliable === false) {
      alert('you are not eligible for this voucher')
      this.setState({counter: 0})
      }
    }else if(counter > 1){
      alert("you have already used a voucher for this order");
    }
  },

  handleDiscount10: function(){
    var counter = this.state.counter + 1
    this.setState({counter: counter})
    var discount = new Discount()
    if (counter === 1){
      var appliable = discount.applyDiscount(50, 10, this.state.cartPrice)
      if(appliable === true){
        this.setState({discountedPrice: discount.totalPrice})
      } 
      else if (appliable === false) {
      alert('you are not eligible for this voucher')
      this.setState({counter: 0})
      }
    }else if(counter > 1){
      alert("you have already used a voucher for this order");
    }
  },

  handleDiscount15: function(){
    var counter = this.state.counter + 1
    this.setState({counter: counter})
    var discount = new Discount()
    if (counter === 1){
      var appliable = discount.applyDiscount(75, 15, this.state.cartPrice)
      if(appliable === true){
        this.setState({discountedPrice: discount.totalPrice})
      } 
      else if (appliable === false) {
      alert('you are not eligible for this voucher')
      this.setState({counter: 0})
      }
    }else if(counter > 1){
      alert("you have already used a voucher for this order");
    }
  },

  addProduct: function(newProduct){
    var cart = new Cart();
    cart.items=this.state.cart
    if (newProduct.quantity>0){
      cart.addItem(new Item(newProduct),1);
      var newDiscounted = this.state.discountedPrice + newProduct.price
      this.setState({discountedPrice: newDiscounted})
    }
    var stock = new Stock(this.state.products);
    stock.removeItem(newProduct,1)
    cart.totPrice()
    this.setState({products: stock.items, cart: cart.items, cartPrice: cart.totalPrice} )
  },

  removeFromCart: function(item){
    var cart = new Cart();
    cart.items = this.state.cart
    var stock = new Stock(this.state.products)
    cart.removeItem(item)
    cart.totPrice()
    stock.addExsitingItem(item)
    var newDiscounted = this.state.discountedPrice - item.price
    this.setState({products: stock.items, cart:cart.items, cartPrice: cart.totalPrice, discountedPrice: newDiscounted})
  },

  render: function(){
    var stock = new Stock (sampleProducts);

    return (
      <div>
        <div className = 'products-box'>
          <h1> Deloitte Clothing Retailer  </h1>
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
          <button className='button' onClick={this.handleDiscount5}> Voucher 5 £ </button>
          <button className='button' onClick={this.handleDiscount10}> Voucher 10 £ </button>
          <button className='button' onClick={this.handleDiscount15}> Voucher 15 £ </button>
          <p> Discounted Price: { this.state.discountedPrice } £ </p>
        </div>
      </div>
    )
  
  }

})

module.exports = ShopBox;