angular.module('muslimChef.tour', [])
  .controller('tourCtrl', function ($scope, $ionicSlideBoxDelegate) {
    console.log('loaded');
    function init(){

    }
    init();
    $scope.nextSlide = function () {
      if ($ionicSlideBoxDelegate.currentIndex() == ($ionicSlideBoxDelegate.slidesCount() - 1)) {
        $ionicSlideBoxDelegate.slide(0)
      } else {
        $ionicSlideBoxDelegate.next();
      }
    }
  });
