// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('neolist', ['ionic', 'neolist.controllers','neolist.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('Voltar');


  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        controller:'SearchCtrl',
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.detail',{
    url:'/detail/:contactId',
    views:{
      'menuContent':{
        controller:'DetailCtrl',
        templateUrl:'templates/detail.html'
      }
    }
  })

  .state('app.login',{
    url:'/login',
    views:{
      'menuContent':{
        controller:'LoginCtrl',
        templateUrl:'templates/loginview.html'
      }
    }
  })

  .state('app.about',{
    url:'/about',
    views:{
      'menuContent':{
        templateUrl: 'templates/about.html'
      }
    }
  })

  .state('app.register',{
    url:'/register',
    views:{
      'menuContent':{
        controller:'RegisterCtrl',
        templateUrl: 'templates/register.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
