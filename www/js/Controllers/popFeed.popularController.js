angular.module('muslimChef.popFeed.popular', [])
.controller('popFeed.popularCtrl', function ($scope,dataService) {
    console.log('loaded');
    $scope.populars = dataService.getPopular();
  }
);
