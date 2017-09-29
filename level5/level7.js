// 5.2 Refactoring into a Module
// After that we will need a way to encapsulate our directives in order to give our app access to them.
// We can use a module to do this! It is time for Module inception!
// There is a new js file provided for you — products.js; extract all store 
// directives(descriptions, specs, reviews, title, gallery, and tabs) and paste them inside this new file.
// Then create a new module that we will make our original gemStore module require as a dependency.

// 1.) Create a new Module named store-directives to encapsulate our store Directives.
// 2.) Move the Directive definitions from app.js into products.js.
// 3.) Give gemStore Module access to the directives by adding a dependency to gemStore's definition.
// 4.) Link in the new products.js file.

(function() {
  var app = angular.module('gemStore', ['store-directives']); //3.)

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
    //2.) Directives moved into products.js
 

  var gems = [{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: []
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif",
      ],
      reviews: []
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-08.gif"
      ],
      reviews: []
    }];
})();

// 5.4 Built-in AngularJS Services
// We can use the built-in $http Service to make requests to a server (or in our case a json file).
// Give our StoreController access to the products using a service.

// 1.) Inject the $http service into our StoreController.
// 2.) get the store-products.json using the $http Service.
// 3.) Attach a success to our get call.
// 4.) Name the first parameter of the success function data.
// 5.) Give our StoreController access to the products by setting products equal to the data given to us with the http service's success promise.

(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function(http) { //1.)
    var store = this;
    store.products = [];
    
    $http.get('/store-products.json').success(function(data) {
        store.products = data; //5.)
      }); //2.) //3.) //4.)
  }]);
      

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
