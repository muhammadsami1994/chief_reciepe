// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('muslimChef', ['ionic',
  'muslimChef.tour',
  'muslimChef.login',
  'muslimChef.visitUserProfile',
  'muslimChef.settings',
  'muslimChef.selectedPost',
  'muslimChef.editProfile',
  'muslimChef.popFeed',
  'muslimChef.popFeed.feed',
  'muslimChef.popFeed.popular',
  'muslimChef.explorePeople',
  'muslimChef.explorePeople.explore',
  'muslimChef.explorePeople.people',
  'muslimChef.dataService'
])

  .run(function ($ionicPlatform,$rootScope,$ionicSideMenuDelegate) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      $rootScope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tour', {
        url: '/tour',
        templateUrl: 'templates/tour.html',
        controller: 'tourCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })
      .state('visitUserProfile', {
        url: '/visitUserProfile',
        templateUrl: 'templates/visitUserProfile.html',
        controller: 'visitUserProfileCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      })
      .state('selectedPost', {
        url: '/selectedPost',
        templateUrl: 'templates/selectedPost.html',
        controller: 'selectedPostCtrl'
      })
      .state('editProfile', {
        url: '/editProfile',
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      })
      /*popular and feed tabs*/
      .state('popFeed', {
        url: '/popFeed',
        abstract: true,
        templateUrl: 'templates/popFeed.html',
        controller: 'popFeedCtrl'
      })
      .state('popFeed.popular', {
        url: '/popular',
        views: {
          'popFeed-popular': {
            templateUrl: 'templates/popFeed-popular.html',
            controller: 'popFeed.popularCtrl'
          }
        }
      })
      .state('popFeed.feed', {
        url: '/feed',
        views: {
          'popFeed-feed': {
            templateUrl: 'templates/popFeed-feed.html',
            controller:'popFeed.feedCtrl'
          }
        }
      })
    /*explore and people tabs*/
      .state('explorePeople', {
        url: '/explorePeople',
        abstract: true,
        templateUrl: 'templates/explorePeople.html',
        controller:'explorePeopleCtrl'
      })
      .state('explorePeople.explore', {
        url: '/explore',
        views: {
          'explorePeople-explore': {
            templateUrl: 'templates/explorePeople-explore.html',
            controller : 'explorePeople.exploreCtrl'
          }
        }
      })
      .state('explorePeople.people', {
        url: '/people',
        views: {
          'explorePeople-people': {
            templateUrl: 'templates/explorePeople-people.html',
            controller: 'explorePeople.peopleCtrl'
          }
        }
      })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tour');

  });
