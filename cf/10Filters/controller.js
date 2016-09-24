
angular.module("mainModule", [])
        .filter("removeHtml", function () { //Filtro Personalizado
            return function (texto) {
                return String(texto).replace(/<[^>]+>/gm, '');
            }
        })
        .controller("FilterController", function ($scope) {
            $scope.myHtml = "<p>From Bolivia</p>"
    
            $scope.myJson = {};
            $scope.myJson.title = "Titulo";
            $scope.myJson.body = "Body";
            
            $scope.currency = 2;
        });
            