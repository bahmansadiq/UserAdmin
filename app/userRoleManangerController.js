(function() {
    'use strict';

    angular
        .module('userAdmin')
        .controller('userRoleManagerController', userRoleManagerController);

    userRoleManagerController.$inject = ['userAdminFactory'];

    /* @ngInject */
    function userRoleManagerController(userAdminFactory) {
        var vm = this;
        vm.title = 'userRoleManagerController';
        vm.userList=[];
        vm.roleList=[];
         var role = {};


        activate();

        ////////////////

        function activate() {
             userAdminFactory.getuserRoleManager()
            .then(function(response){
                vm.userRoleList=response;
                return response;
            }, function(error)
            {
                return error;
            });


            userAdminFactory.getRoles()
            .then(function(response){
                vm.roleList.push(response);

                return response;
            }, function(error)
            {
                return error;
            });

             userAdminFactory.getUsers()
            .then(function(response){
                for(var i=0; i<response.length; i++){

                        role = {

                        id: response[i].roleId,
                        description: response[i].description

                        }
                     vm.userList.push(role[i]);
                }
               
                return response;
            }, function(error)
            {
                return error;
            });
        }
        vm.addUserRoleMananger =function(){

                     var  data = {
                            UserId : 2,
                            RoleId: 2,
                            LastUpdated: Date.now()
                         }
            userAdminFactory.postUserRoleManager(data)
                .then(function(response){
                console.log(response+ "Successfully added the user and role to the userRoleManager controller");
                return response;
            }, function(error)
            {
                  console.log(error+ "Unable to add the user and role to the userRoleManager controller");
                return error;
            });

        }
    }
})();