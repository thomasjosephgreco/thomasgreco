angular.module('ui.router.config', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: './templates/home/main.html'
                    },
                    'Header@home': {
                        templateUrl: './templates/assets/nav.html',
                        controller: 'NavController'
                    },
                    'Main-Content@home': {
                        templateUrl: './templates/home/body-content.html',
                        controller: 'SliderController'
                    },
                    'Footer@home': {
                        templateUrl: './templates/assets/footer.html'
                    }
                }
            })
            .state('about', {
                url: '/this-app',
                views: {
                    '': {
                        templateUrl: './templates/about/main.html'
                    },
                    'Header@about': {
                        templateUrl: './templates/assets/nav.html',
                        controller: 'NavController'
                    },

                    'Top-Content@about': {
                        templateUrl: './templates/about/top-content.html'
                    },
                    'Footer@about': {
                        templateUrl: './templates/assets/footer.html'
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    '': {
                        templateUrl: './templates/contact/main.html'
                    },
                    'Header@contact': {
                        templateUrl: './templates/assets/nav.html',
                        controller: 'NavController'
                    },
                    'Contact-Form@contact': {
                        templateUrl: './templates/contact/myForm.html',
                        controller: 'MongooseController'
                    },
                    'Footer@contact': {
                        templateUrl: './templates/assets/footer.html'
                    }
                }
            });

        $locationProvider.html5Mode(true).hashPrefix('!')


        //END ROUTE CONFIGURTATION
    }]);