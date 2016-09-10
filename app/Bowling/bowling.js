'use strict';

angular.module('careerAnalysisApp.bowling', [
  'ngRoute',
  'ui.grid',
  'careerAnalysisApp.bowling.visualizations'
  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bowling', {
    templateUrl: 'Bowling/bowling.html',
    controller: 'bowlingCtrl'
  });
}])

.controller('bowlingCtrl', [function() {

}])

.controller('bowlingGridController', ['$scope', '$http','$timeout','uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions = {
    
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;
    },
    enableFiltering: true,
    columnDefs: [
      {field: 'Wickets'},
      {field: 'Runs Conceded'},,
      {field: 'Opposition'},
      {field: 'Ground'},
      {field: 'Date'},
      {field: 'Match Result'},
      {field: 'Result Margin'},
      {field: 'Result Margin Type'}
    ]
  };



  $http.get('/Bowling/bowlingGridData.json')
    .success(function(data) {
      $scope.gridOptions.data = data;

    });

    
}])

;




