angular.module("MyFirstApp", [])
        .controller("FirstController", function ($scope, $http) {
            $scope.posts = [];
            $scope.newPost = {};
            // retornar un objeto promise
            $http.get("http://jsonplaceholder.typicode.com/posts")
                    .success(function (data) {
                        $scope.posts = data;
                    })
                    .error(function () {

                    });

            $scope.addPost = function () {
                $http.post("http://jsonplaceholder.typicode.com/posts", {
                    title: $scope.newPost.title,
                    body: $scope.newPost.body,
                    userId: 1
                })
                        .success(function (data, status, headers, config) {
                            console.log(data);
                            $scope.posts.push(data);
                            $scope.newPost = {};
                        })
                        .error(function (error, status, headers, config) {

                        });
            }
        });



