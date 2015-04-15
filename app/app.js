var app=angular.module("app",[
		'ngRoute'

	]);

app.config(function($routeProvider){
	$routeProvider.when("/cliente",{
		templateUrl:"./app/views/cliente.html"
		});
});


app.controller("ctl",function($scope){
		$scope.cliente = [{nombre:"", apellido:""}];
		//$scope.cliente.nombre="Ali";
		$scope.clientes = [
    {
        
        "nombre": "Juan Gonzales",
        "direccion": "Juliaca"
    },
    {
        
        "nombre": "Eder",
        "direccion": "Juliaca Puno"
    },
    {
        
        "nombre": "Eder 2",
        "direccion": "Juliaca Puno"
    }
]


	});