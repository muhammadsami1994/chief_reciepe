angular.module('muslimChef.explorePeople.people', [])
.controller('explorePeople.peopleCtrl', function ($scope,dataService) {
    console.log('loaded');
    $scope.peoples = dataService.getPeople();
  }
);
