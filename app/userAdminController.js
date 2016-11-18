(function() {
    'use strict';

    angular
        .module('userAdmin')
        .controller('userAdminController', userAdminController);

    userAdminController.$inject = ['userAdminFactory'];

    /* @ngInject */
    function userAdminController(userAdminFactory) {
        var vm = this;
        vm.title = 'userAdminController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();