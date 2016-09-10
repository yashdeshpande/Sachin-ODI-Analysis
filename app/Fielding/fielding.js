'use strict';

angular.module('careerAnalysisApp.fielding', [
  'ngRoute',
  'ui.grid',
  'careerAnalysisApp.fielding.visualizations'
  ])

.controller('fieldingGridController', ['$scope', '$http','uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions = {
    
    onRegisterApi: function(gridApi){
      $scope.gridApi = gridApi;

    },
    enableFiltering: true,
    columnDefs: [
      {field: 'Catches'},
      {field: 'Opposition'},
      {field: 'Ground'},
      {field: 'Date'},
      {field: 'Match Result'},
      {field: 'Result Margin'},
      {field: 'Result Margin Type'}

    ]
  };
 


  $http.get('/Fielding/fieldingGridData.json')
    .success(function(data) {
      $scope.gridOptions.data = data;

    });

    
}])

;

