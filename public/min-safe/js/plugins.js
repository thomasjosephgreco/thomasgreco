var plugin = angular.module('slider.config', [])

plugin.controller('SliderController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.slides = [
        'http://placehold.it/350x150',
        'http://placehold.it/350x150',
        'http://placehold.it/350x150',
        'http://placehold.it/350x150',
        'http://placehold.it/350x150',
        'http://placehold.it/350x150',
        'http://placehold.it/350x150',
        'http://placehold.it/350x150'
    ];
}]);

