var scotchApp = angular.module('scotchApp', ['ngRoute']);
scotchApp.config(function($routeProvider) {
		$routeProvider
		.when('/',{
			templeUrl: "view/main.html",
			controller: "home" })

		.when("/button",{
			templeUrl: "view/dataTable.html",
			controller: "test" });
	});

	app.controller('home', function($scope){
  		$scope.hello = "hello";
	});

	app.controller('MainCtrl', function($scope){
  		$scope.message = "hi";
	});

	app.controller('test', function($scope) {	    
		$scope.datas = [
					    {"name":"John", "age":"Doe", "add":"qq", "id": "1"},
					    {"name":"Anna", "age":"Smith" ,"add":"qq", "id":"2"},
					    {"name":"Peter", "age":"Jones","add":"qq", "id": "3"}
					  ];
		$(document).ready(function(){
		    $('#example').DataTable({
		       
		    });
		});
	});
	