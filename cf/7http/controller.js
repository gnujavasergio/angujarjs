angular.module("MyFirstApp", [])
        .controller("FirstController", function ($scope, $http) {
            $scope.posts = [];
            // retornar un objeto promise
            $http.get("http://jsonplaceholder.typicode.com/posts")
                    .success(function (data) {
                        $scope.posts = data;
                    })
                    .error(function () {

                    });
        });



