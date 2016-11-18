(function() {
    'use strict';

    angular
        .module('userAdmin')
        .factory('userAdminFactory', userAdminFactory);

    userAdminFactory.$inject = ['$http'];

    /* @ngInject */
    function userAdminFactory($http) {
        var service = {
            getUsers: getUsers,
            postUser: postUser,
            getRoles: getRoles,
            postRole: postRole,
            deleteRole: deleteRole,
            getuserRoleManager: getuserRoleManager,
            postUserRoleManager: postUserRoleManager

        };
        return service;

        ////////////////
        function getUsers() {
            return $http({
                method: 'GET',
                url: 'http://localhost:49426/api/Users'
            }).then(function(result) {
                return result.data; // changed here
            }, function(error) {
                console.log(error + "unable to load the users in factory");
                return error;
            });
        }

        function postUser(user) {
            return $http({
                method: 'POST',
                url: 'http://localhost:49426/api/Users',
                data: user
            }).then(function(result) {
                console.log(result + "successfully added the user Database!"); 
            }, function(error) {
                console.log(error + "unable to add the users to Database!");
                return error;
            });
        }

        function getRoles(){
             return $http({
                method: 'GET',
                url: 'http://localhost:49426/api/Roles'
            }).then(function(result) {
                return result.data; // changed here
            }, function(error) {
                console.log(error + "unable to load the role in factory");
                return error;
            });

        }

        function postRole(role) {
            return $http({
                method: 'POST',
                url: 'http://localhost:49426/api/Roles',
                data: role
            }).then(function(result) {
                console.log(result + "successfully added the role Database!"); // changed here
            }, function(error) {
                console.log(error + "unable to add the role to Database!");
                return error;
            });
        }

            function deleteRole(id) {
            return $http({
                method: 'DELETE',
                url: 'http://localhost:49426/api/Roles'+'/'+ id
            }).then(function(result) {
                console.log(result + "successfully deleted the role Database!"); // changed here
            }, function(error) {
                console.log(error + "unable to delete the role to Database!");
                return error;
            });
        }

         function getuserRoleManager(){

             return $http({
                method: 'GET',
                url: 'http://localhost:49426/api/UserRoles'
            }).then(function(result) {
                console.log(result + "successfully loaded the  User and Role in factory");
                return result.data; // changed here
            }, function(error) {
                console.log(error + "unable to load the  User and Role in factory");
                return error;
            });

         }
         function postUserRoleManager(data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:49426/api'+ '/'+ 'UserRoles',
                data: data,
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }

            }).then(function(result) {
                console.log(result + "successfully added the User and Role to Database!"); // changed here
            }, function(error) {
                console.log(error + "unable to add the User and Role to Database!");
                return error;
            });
        }





    }

})();
