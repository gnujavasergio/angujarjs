var app = angular.module("MyFirstApp",[]);

app.controller("FirstController",function($scope){
    // atributos
    $scope.nombre = "Sergio";
    $scope.newComment = {};
    $scope.comments = [
        { comment:"Buen tutorial", username:"gnu.java.sergio"},
        { comment:"Malisimo Tutorial", username:"melcita"}
    ];
    
    //Metodos para nuestro controllador
    
    $scope.addComment = function(){
        $scope.comments.push($scope.newComment);
        $scope.newComment = {};
    }
   
});



