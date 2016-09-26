myApp.controller("viewHeroesController", ["$scope", "$http", function($scope, $http){
console.log("in view Heroes");

//get heroes
var viewHeroes= function(){
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function ( response ){
      console.log(response);
      console.log('back from server with:', response.data);
      $scope.allHeroes =response.data;
    });// end http Call
  };// end view heroes
  viewHeroes();

  $scope.delete=function(hero){
    console.log(" Hero to delete", hero);
    // create object to send
    var heroToDelete = {
      _id: hero._id
    };
    console.log(heroToDelete);
    $http({
      method: 'DELETE',
      url: '/heroes',
      data: heroToDelete,
      headers: {"Content-Type": "application/json;charset=utf-8"}
    }).then(function ( response ){
      console.log('back from server with:', response);
    });
    viewHeroes();

  };// end delete hero
}]);
