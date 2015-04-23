var form = angular.module('form.config', [])

form.factory('Users', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/users');
        },
        create: function(userData) {
            return $http.post('/api/users', userData);
        },
        delete: function(id) {
            return $http.delete('/api/users/' + id);
        }
    };
}]);
form.controller('MongooseController', ['$scope', '$http', 'Users', function($scope, $http, Users) {
    $scope.formData = {};

    // CREATE ==================================================================
    // when submitting the add , send the text to the node API
    $scope.createUser = function() {


        // validate the Data to make sure that something is there
        // if  is empty, nothing will happen
        if ($scope.formData != undefined) {
            // call the create function from our service (returns a promise object)
            Users.create($scope.formData)

            // if successful creation, call our get function to get all the new Users
            .success(function(data) {
                $scope.formData = {}; // clear the  so our user is ready to enter another
                $scope.users = data; // assign our new list of Users
            });
        }
    };
}]);
