var app = angular.module('myApp', []);
	app.controller('test', function($scope) {	    
		$scope.datas = [
					    {"name":"John", "age":"Doe", "add":"qq", "id": "1"},
					    {"name":"Anna", "age":"Smith" ,"add":"qq", "id":"2"},
					    {"name":"Peter", "age":"Jones","add":"qq", "id": "3"}
					  ];

		$(document).ready(function() {
		    $('#example').DataTable( {
		       
		    } );
		} );
	});
	