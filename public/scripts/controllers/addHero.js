myApp.controller("addHeroController", ["$scope", "$http", function($scope, $http){
   var populateSelect = function(){
     $http({
    method: 'GET',
    url: '/heroes/enum'
  }).then(function successCallback(response) {
    $scope.enum = response.data.map(function(type) {
      return {type: type };
    });
    $scope.selected = $scope.enum[0];
    console.log('enum =', $scope.enum);
  }, function errorCallback(response) {
    console.log('err');
  });
};// end populateSelect
populateSelect();

  $scope.addHero = function(){
    // create hero to send object
    var heroToSend ={
      alias: $scope.alias,
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      city: $scope.city,
      power_name: $scope.superPower.type
    };// end heroToSend
    console.log("this is the hero", heroToSend);

    //post call
    $http({
      method: 'POST',
        url: '/heroes',
        data: heroToSend,
      }).then(function ( response ){
        console.log('back from server with:', response);
         var addHero = angular.element( document.querySelector( '#addHero' ));
        addHero.append('<p class="text-primary"> <a href="#heroes"> Your hero is being tracked! Click to view all tracked heroes.</a></p>');
      });
    };//end addHero

}]);// end heroes controller
