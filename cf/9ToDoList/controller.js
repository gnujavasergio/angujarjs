//LocalStorageModule se esta añadiendo como dependencia
angular.module("ToDoList", ["LocalStorageModule"])
        .controller("ToDoController", function ($scope, localStorageService) {
            if (localStorageService.get("angular-todoList")) {
                $scope.todo = localStorageService.get("angular-todoList");
            } else {
                $scope.todo = [];
            }

            $scope.newActivity = {
                description: '',
                date: ''
            };

            /**
             {
             description: 'Terminar el curso angular',
             date: '25-09-2016'
             }
             */
            /*
             $scope.$watch(function () {
             return $scope.newActivity;
             }, function (newValue, oldValue) {
             console.log(newValue);
             console.log(oldValue);
             });
             */

            $scope.$watchCollection('todo', function (newValue, oldValue) {
                localStorageService.set("angular-todoList", $scope.todo);
            });

            $scope.addActivity = function () {
                $scope.todo.push($scope.newActivity)
                $scope.newActivity = {};
            }

            $scope.cleanActivity = function () {
                $scope.todo = [];
            }
        });
