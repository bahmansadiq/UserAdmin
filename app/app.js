(function() {
    'use strict';

    var userAdmin = angular
        .module('userAdmin', ['ui.router','toastr']);
    userAdmin.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/partials/home.html"
            })
             .state('home.userAdmin', {
                url: "/movieDetails/:movieDetailId",
                templateUrl: "app/partials/userAdmin.html",
                parent: "home",
                controller: 'userAdminController',
                controllerAs: 'vm'
            })
            .state('home.userManager', {
                url: "/movieDetails/:movieDetailId",
                templateUrl: "app/partials/userManager.html",
                parent: "home",
                controller: 'userManagerController',
                controllerAs: 'vm'
            })
            .state('home.roleManager', {
                url: "/movieDetails/:movieDetailId",
                templateUrl: "app/partials/roleManager.html",
                parent: "home",
                controller: 'roleManagerController',
                controllerAs: 'vm'
            })
            .state('home.userRoleManager', {
                url: "/movieDetails/:movieDetailId",
                templateUrl: "app/partials/userRoleManager.html",
                  parent: "home",
                controller: 'userRoleManagerController',
                controllerAs: 'vm'
            });
    });
})();

