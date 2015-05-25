var blog = angular.module('BlogApp', []);


blog.controller('BlogController', function($scope, $http) {
    $scope.message = 'Welcome to my blog!';

    var apiKey = 'CnNeCnRgvPewXintuzhdtOoXJ1IRbPZv3vOVIE7cYhbaKtYOwf';


    $http.jsonp('http://api.tumblr.com/v2/blog/92ndPerspective.tumblr.com/posts/text?api_key=' + apiKey + '&filter=text' + '&callback=JSON_CALLBACK')
        .success(function(data) {
            $scope.articles = data.response.posts;
            console.log(data.response.posts);
        })
        .error(function(err) {
            console.log('ERROR GETTING POSTS');
            console.log(err);
        });


});