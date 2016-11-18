(function() {
    'use strict';

    angular
        .module('userAdmin')
        .controller('userManagerController', userManagerController);

    userManagerController.$inject = ['userAdminFactory'];

    /* @ngInject */
    function userManagerController(userAdminFactory) {
        var vm = this;
        vm.title = 'userManagerController';



        activate();

        ////////////////

        function activate() {

            userAdminFactory.getUsers()
            .then(function(response){
                vm.allUsers=response;
                return response;
            }, function(error)
            {
                return error;
            });
        }
        vm.addUser = function(){
         var   user={
                firstName: vm.firstName,
                lastName : vm.lastName,
                emailAddress: vm.emailAddress,
                userName: vm.userName,
                password: vm.password,
                UserDateCreated: new Date()
            }
             userAdminFactory.postUser(user)
            .then(function(response){
                activate();
             vm.firstName="";
             vm.lastName="";
             vm.emailAddress="";
             vm.userName="";
             vm.password="";

                console.log(response +"Successfully passed the user in the controller!")


            }, function(error){
                return error;
            });
        }

    }
})();
