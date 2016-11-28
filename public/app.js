var scotchApp = angular.module('scotchApp', ['ngRoute']);
scotchApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/dataTable', {
                templateUrl : 'pages/dataTable.html',
                controller  : 'dataTableController'
            })

            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    scotchApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('dataTableController', function($scope, $timeout) {
        $scope.datas = [
                        {"name":"John", "age":"Doe", "add":"qq", "id": "1"},
                        {"name":"Anna", "age":"Smith" ,"add":"qq", "id":"2"},
                        {"name":"Peter", "age":"Jones","add":"qq", "id": "3"},

                        {"name":"John", "age":"Doe", "add":"qq", "id": "1"},
                        {"name":"Anna", "age":"Smith" ,"add":"qq", "id":"2"},
                        {"name":"Peter", "age":"Jones","add":"qq", "id": "3"},

                        {"name":"John", "age":"Doe", "add":"qq", "id": "1"},
                        {"name":"Anna", "age":"Smith" ,"add":"qq", "id":"2"},
                        {"name":"Peter", "age":"Jones","add":"qq", "id": "3"},

                        {"name":"John", "age":"Doe", "add":"qq", "id": "1"},
                        {"name":"Anna", "age":"Smith" ,"add":"qq", "id":"2"},
                        {"name":"Peter", "age":"Jones","add":"qq", "id": "3"}
                      ];
        $timeout(function(){ 
            $(document).ready(function(){
                $('#example').DataTable({
                   
                });
            });
        }, 500);
    });    

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

