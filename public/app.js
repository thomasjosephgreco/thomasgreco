var app = angular.module('app', [
    'ngMessages',
    'ui.router.config',
    'angular-flexslider'
    ])


app.factory('Users', ['$http', function($http) {
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


app.controller('MongooseController', ['$scope', '$http', 'Users', function($scope, $http, Users) {
    $scope.formData = {};

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createUser = function() {


        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.formData != undefined) {
            // call the create function from our service (returns a promise object)
            Users.create($scope.formData)

            // if successful creation, call our get function to get all the new Users
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.users = data; // assign our new list of Users
            });
        }
    };
}]);



app.controller('NavController', function($scope) {
    $(function() {
        $("#nav").tinyNav();
    });

});



app.controller('WijmoGalleryController', function($scope) {
    $scope.vm = this;
});
app.controller('SliderController', function($scope, $timeout) {
    $scope.slides = [
        './images/skills/AI6.png',
        './images/skills/cs6.png',
        './images/skills/js-logo.png',
        './images/skills/git.png',
        './images/skills/html5x300.png',
        './images/skills/yeoman.png',
        './images/skills/nodejs350.png',
        './images/skills/Angular.png',
        './images/skills/firebase.png',
        './images/skills/grunt.png',
        './images/skills/Sass320x320.png',
        './images/skills/Bower.png'

    ];
});