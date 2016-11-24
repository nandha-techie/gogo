var app = angular.module('myApp', []);

app.controller('test', function($scope){
	console.log('testing');
	$scope.datas = [{'name':'arun'},{'name':'thaman'},{'name':'rahul'}];
	$( function() {
		    $( "#sortable" ).sortable({
		      revert: true
		    });
	    });
	$rootScope.$on('#sortable',function(){
		$( function() {
		    $( "#sortable" ).sortable({
		      revert: true
		    });
	    });
	});    
  	
});