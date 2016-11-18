(function() {
    'use strict';

    angular
        .module('userAdmin')
        .controller('roleManagerController', roleManagerController);

    roleManagerController.$inject = ['userAdminFactory'];

    /* @ngInject */
    function roleManagerController(userAdminFactory) {
        var vm = this;
        vm.title = 'roleManagerController';

        activate();

        ////////////////

        function activate() {

            userAdminFactory.getRoles()
            .then(function(response){
                vm.userRoles=response;
                return response;
            }, function(error)
            {
                return error;
            });
        }

        vm.addRole = function(){
         var   role={
                Name: vm.roleName,
                Description : vm.roleDescription,
                RoleDateCreated: new Date(),
                IsActive: vm.isActive
            }
            userAdminFactory.postRole(role)
            .then(function(response){
                activate();
                console.log( response + "Successfully passed the role in the controller!");
            }, function(error){
                return error;
            });
        }
        vm.removeRole=function(id){
            userAdminFactory.deleteRole(id)
            .then(function(response){
                activate();
                console.log(response +"Unable to delete the role!");
            }, function(error){
                return error;
            });
        }




    }
})();