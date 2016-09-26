console.log("script is sourced");

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/heroes",{
      templateUrl: "../views/partials/viewHeroes.html",
      controller: "viewHeroesController"
    }).
    when("/add", {
      templateUrl: "../views/partials/addHero.html",
      controller: "addHeroController"
    }).
    otherwise({
      redirectTo:"/heroes"
    });
  }]);
