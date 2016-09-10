'use strict';

angular.module('careerAnalysisApp.batting', [
  'ngRoute',
  'ui.grid',
  'careerAnalysisApp.batting.visualizations'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/batting', {
    templateUrl: 'batting/batting.html',
    controller: 'battingCtrl'
  });
}])

.controller('battingCtrl', [function() {

}])


.controller('battingGridController', ['$scope', '$http','uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions = {
    
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
      
    },
    enableFiltering: true,
    columnDefs: [
      {field: 'Batting score'},
      {field: 'Innings'},
      {field: 'Out'},
      {field: 'Total Score'},
      {field: 'Opposition'},
      {field: 'Ground'},
      {field: 'Date'},
      {field: 'Match Result'},
      {field: 'Result Margin'},
      {field: 'Result Margin Type'}

    ]
  };

  $http.get('/Batting/battingGridData.json')
    .success(function(data) {
      $scope.gridOptions.data = data;

    });

    
}])


;

