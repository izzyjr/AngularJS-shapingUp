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
  var app = angular.module('store-directives', []); //1.)
    
  app.directive("productDescription", function() {  //2.) all directives
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });
  
  
  
  
})(); 

// 5.4 Built-in AngularJS Services
// We can use the built-in $http Service to make requests to a server (or in our case a json file).
// Give our StoreController access to the products using a service.

// 1.) Inject the $http service into our StoreController.
// 2.) get the store-products.json using the $http Service.
// 3.) Attach a success to our get call.
// 4.) Name the first parameter of the success function data.
// 5.) Give our StoreController access to the products by setting products equal to the data given to us with the http service's success promise.


