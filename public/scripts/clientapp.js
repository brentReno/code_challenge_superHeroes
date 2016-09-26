console.log("script is sourced");

var myApp = angular.module("myApp", []);

myApp.controller("heroesController", ["$scope", "$http", function($scope, $http){
  $scope.addHero = function(){
    // create hero to send object
    var heroToSend ={
      alias: $scope.alias,
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      city: $scope.city,
      power_name: $scope.superPower
    };// end heroToSend
    console.log("this is the hero", heroToSend);

  //post call
  $http({
    method: 'POST',
      url: '/heroes',
      data: heroToSend,
    }).then(function ( response ){
      console.log('back from server with:', response);
    });
  };//end addHero
}]);// end heroes controller
