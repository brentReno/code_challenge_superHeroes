myApp.controller("viewHeroesController", ["$scope", "$http", function($scope, $http){
console.log("in view Heroes");

//get heroes
var viewHeroes= function(){
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function ( response ){
      console.log('back from server with:', response.data);
      $scope.allHeroes =response.data;
    });// end http Call
  };// end view heroes
  viewHeroes();
}]);
