(function(){
    debugger;
    var myApp = angular.module("myApp");
    myApp.controller("BooksController", ["$scope", "$route", "$http", "$location", "$routeParams", function($scope, $route, $http, $location, $routeParams){
        debugger;
        $scope.getBooks = function(){
            debugger;
            var x = $route.current;
            $http.get("/api/books").then(function (response) {
                $scope.books = response.data;
            }, function(err){
            });
        };
        $scope.getBook = function(){
            debugger;
            $http.get("/api/books/:id").then(function (response) {
                debugger;
                $scope.book = response.data;
            }, function(err){
            });
        };
    }]);
})();




