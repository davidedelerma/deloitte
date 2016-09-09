Deloitte Digital Development Test:

I 've been asked to develop a responsive website for a clothing retailer.

The User stories are:
- As a User I can add a product to my shopping cart [done]
- As a User I can remove a product from my shopping cart [done]
- As a User I can view the total price for the product in my shopping [done]
- As a user I can apply the following vouchers to my shopping cart:
  - £5.00 off your order [done]
  - £10.00 off when you spend over £50.00 [done]
  - £15.00 off when you spend over £75.00 [done]
  (It is possible to use only one voucher per order)
- As a User I can view the total price for the products in my shopping cart with discounts applied [done]
- As a User I am alerted when I apply an invalid voucher to my shopping cart. [done]
- As sa User I am unable to Out of Stock products to the shopping cart. [done]

Technologies Used:
- Mocha for Tests
- React 
- Webpack
- Babel
- NodeJs
- npm

Language:
- Javascript

Data:
The moched data used for this test are in: /client/src/sample.json

To run the code:
  In the main foler run :
    1.  npm install
    2.  npm run
  In the client folder run:
    1.  npm install
    2.  npm run

All the models are stored in the folder: /client/src/retail, the tests in: /client/src/retail/specs
To run the tests run in: /client/src/retail the command mocha specs

I have used React for the frontend part. 
The code layout is described in the picture: ./code_layout.JPG