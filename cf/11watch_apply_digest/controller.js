
angular.module("mainModule", [])
        .controller("FirstController", function ($scope) {
            $scope.name = "Sergio";
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.name = "Soy de Bolivia, Sucre";
                });
            }, 2000);

            document.querySelector('#myButton').addEventListener("click", function () {
                $scope.$apply(function () {
                    $scope.name = "Soy de Bolivia, Sucre";
                });
            });
        });