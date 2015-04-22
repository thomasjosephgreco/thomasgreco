var app = angular.module('app', [
    'firebase',
    'ngMessages',
    'ui.router.config',
    'angular-flexslider'
    ])


app.factory('Users', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/users');
        },
        create: function(todoData) {
            return $http.post('/api/users', todoData);
        },
        delete: function(id) {
            return $http.delete('/api/users/' + id);
        }
    };
}]);

app.controller('MongooseController', ['$scope', '$http', 'Users', function($scope, $http, Users) {
    $scope.formData = {};
    $scope.loading = true;

    // GET =====================================================================
    // when landing on the page, get all Users and show them
    // use the service to get all the Users
    Users.get()
        .success(function(data) {
            $scope.Users = data;
            $scope.loading = false;
        });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createUser = function() {

        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.formData.name != undefined) {
            $scope.loading = true;

            // call the create function from our service (returns a promise object)
            Users.create($scope.formData)

            // if successful creation, call our get function to get all the new Users
            .success(function(data) {
                $scope.loading = false;
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.users = data; // assign our new list of Users
            });
        }
    };
}]);

app.controller('DummyController', function($scope){

    var vm = this; 

    vm.content = 'Hello from the dummy controller';
});





app.controller('MainModalController', function($scope, ModalService) {

    $scope.show = function() {
        ModalService.showModal({
            templateUrl: './templates/main-modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };

});

app.controller('ModalController', function($scope, close) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

});




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