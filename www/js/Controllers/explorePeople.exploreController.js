angular.module('muslimChef.explorePeople.explore', [])
.controller('explorePeople.exploreCtrl', function ($scope,dataService) {
    console.log('loaded');
    $scope.explores = dataService.getExplore();
  }
);
