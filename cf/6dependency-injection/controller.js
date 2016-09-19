var app = angular.module("MyFirstApp",[]);
// Inyeccion de dependencias
// aqui estamos utilizando un arreglo para realizar la inyeccion de dependencias
// Esto es bueno practica y requisito que el javascript se comprima lo mas que se pueda

app.controller("FirstController",["$scope","$http",function(scope,$http){
    // atributos
    scope.nombre = "Sergio";
    scope.newComment = {};
    scope.comments = [
        { comment:"Buen tutorial", username:"gnu.java.sergio"},
        { comment:"Malisimo Tutorial", username:"melcita"}
    ];
    
    //Metodos para nuestro controllador
    
    scope.addComment = function(){
        scope.comments.push(scope.newComment);
        scope.newComment = {};
    }
}]);



