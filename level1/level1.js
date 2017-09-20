// 1.2 Creating a Store Module
// The Flatlanders need a store to sell their gems and more! They need it really quick, Angular will do the trick!

// They have figured out how to manipulate time and space, allowing them to create three-dimensional gems. The buying and selling of their gems has become a popular Flatlander practice and they believe the next step is taking their wonderful wares to the fourth dimension (the web).

// Can you help them reach their online peddling goals?

// 1.) Create a Module named gemStore so we can get started on this marketing journey.
// 2.) Attach the gemStore module to our HTML page with a Directive.
// 3.) In index.html, create a simple Expression to display a friendly "Hello, Angular!" message.

var app = angular.module('gemStore', []); //1.)

// 1.4 Our First Controller
// In order to add some behavior to our application, we need a controller.
// Add a controller named StoreController to our gemStore application.

// 1.) Add a controller named StoreController to our gemStore application.
// 2.) Attach the StoreController to the <body> tag. Be sure to alias it as store.
// 3.) In app.js, we've added a gem object to represent one of the products in our gemStore.
// Assign it to the product property of StoreController so we can use them in the page.
// 4.) Display the name of the product inside the <h3> tag.
// 5.) Display the price of the product inside the <em> tag.


(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function() {//1.)
        this.product = gem;//3.)
  });

})();
