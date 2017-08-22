(function() {
  'use strict';

  angular.module('awesome', ['ui.router'])
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise('/not-found');

      $stateProvider
        .state({
          name: 'home',
          url: '/',
          templateUrl: 'views/home.template.html'
        })
        .state({
          name: 'about',
          url: '/about',
          templateUrl: 'views/about.template.html'
        })
        .state({
          name: 'photography',
          url: '/photography',
          templateUrl: 'views/photography.template.html'
        })
        .state({
          name: 'dev',
          url: '/web-development',
          templateUrl: 'views/development.template.html'
        })
        .state({
          name: 'contact',
          url: '/contact',
          templateUrl: 'views/contact.template.html'
        })
        .state({
          name: 'not-found',
          url: '/not-found',
          templateUrl: 'not-found.template.html'
        });
    }

}());
