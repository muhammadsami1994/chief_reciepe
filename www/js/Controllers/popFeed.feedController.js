angular.module('muslimChef.popFeed.feed', [])
.controller('popFeed.feedCtrl', function ($scope,dataService) {
    console.log('loaded');
    $scope.feeds = dataService.getFeeds();
  }
);
