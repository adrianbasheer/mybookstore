var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/books/details/:id", {
            controller:"BooksController",
            templateUrl: "views/book_details.html"
        })
        .when("/", {
            controller:"BooksController",
            templateUrl: "views/books.html"
        })
        .when("/books", {
            controller:"BooksController",
            templateUrl: "views/books.html"
        })
        .when("/books/add", {
            controller:"BooksController",
            templateUrl: "views/add_book.html"
        })
        .when("/books/edit/:id", {
            controller:"BooksController",
            templateUrl: "views/edit_book.html"
        })
        .otherwise({
            redirectTo: "views/PageNotFound.html"
        });
})

myApp.run(function ($rootScope) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        console.log('Route error', rejection);
    });
});



